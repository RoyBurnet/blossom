import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ArticleImage from '../../components/articleImage/articleImage';
import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./ArticlePage.css"

// import ArticleItem from '../../components/articleItem/articleItem'
// import ArticleThree from '../../components/articleThree/afticleThree';
class ArticlePage extends Component {
  state = {
    article: {},
    isLoaded: false,
    articles: [],
    render: true
  };

  componentDidMount() {
    const getArticle = axios.get(
      `http://localhost:8888/blossom/wp-json/wp/v2/article/${this.props.match.params.id}`
    );
    const getMultipleArticles = axios.get(
      'http://localhost:8888/blossom/wp-json/wp/v2/article?per+page=3'
    );

    Promise.all([getArticle, getMultipleArticles]).then(res =>
      this.setState({
        article: res[0].data,
        articles: res[1].data,
        isLoaded: true
      })
    );
  }

  handleClick() {
    console.log()
  };

  render() {
    const { article, isLoaded, articles } = this.state;
    const image = article.featured_media;
    if (isLoaded) {
      return (
        <div>
          <ArticleImage imageData={image} />
          <div className="articleContent">
            <h1>{article.title.rendered}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: article.content.rendered }}
            ></div>
            <Link to="/">Go Back</Link>
          </div>
{/* 
          <Container>
            <Row>
              {articles.map(article => (
                <Col xs>
                  <ArticleItem
                    article={article}
                    key={article.id}
                    onClick={() => this.handleClick()}
                  />
                </Col>
              ))}
            </Row>
          </Container> */}
        </div>
      );
    }
    return <h3>Is loading. ...</h3>;
  }
}

class ArticleItem extends Component {
  state = {
    imgUrl: '',
    isLoaded: false
  };

  componentDidMount() {
    const { featured_media } = this.props.article;
    const getImageUrl = axios.get(
      `http://localhost:8888/blossom/wp-json/wp/v2/media/${featured_media}`
    );

    Promise.all([getImageUrl])
      .then(res => {
        this.setState({
          imgUrl: res[0].data.media_details.sizes.full.source_url,
          isLoaded: true
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { title, id } = this.props.article;
    const { imgUrl, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <Link to={`/article/${id}`} onClick={this.props.handleClick}>
          <Card className="cardBox">
            <Card.Img src={imgUrl} className="image" />
            <Card.ImgOverlay
              style={{
                backgroundColor: '#ff0099',
                opacity: '0.2',
                clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)'
              }}
            >
              <Card.Title style={{ color: 'white', fontSize: '30px' }}>
                {title.rendered}
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Link>
      );
    }
    return <h3>Loading ...</h3>;
  }
}

export default ArticlePage