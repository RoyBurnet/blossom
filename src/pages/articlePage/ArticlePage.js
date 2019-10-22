import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ArticleImage from '../../components/articleImage/articleImage';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import './ArticlePage.css';

// import ArticleItem from '../../components/articleItem/articleItem';
// import ArticleThree from '../../components/articleThree/afticleThree';
class ArticlePage extends Component {
  state = {
    articleId: this.props.match.params.id,
    article: {},
    isLoaded: false,
    articles: [],
    trigger: false,
    media: []
  };

  componentDidMount() {
    const getArticle = axios.get(
      `https://fesinternet.nl/api/wp-json/wp/v2/article/${this.state.articleId}`
    );

    const getMultipleArticles = axios.get(
      'https://fesinternet.nl/api/wp-json/wp/v2/article?per+page=3'
    );

    Promise.all([getArticle, getMultipleArticles]).then(res =>
      this.setState({
        article: res[0].data,
        articles: res[1].data,
        isLoaded: true,
        trigger: true
      })
    );
  }

  handleClick = (id) => {
    this.setState({
      isLoaded: false
    });

    axios
      .get(`https://fesinternet.nl/api/wp-json/wp/v2/article/${id}`)
      .then(res => {
        this.setState({
          article: res.data,
          isLoaded: true
        });
      });
    console.log(id)

  }

  render() {
    const { article, isLoaded, articles, media } = this.state;
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

          <Container>
            <Row>
              {articles.map(article => (
                <Col xs>
                  <ArticlePageItem
                    articleImg={media}
                    article={article}
                    key={article.id}
                    onClick={this.handleClick}
                  />
                </Col>

              ))}
            </Row>
          </Container>
        </div>
      );
    }
    return <h3>Is loading. ...</h3>;
  }
}

class ArticlePageItem extends Component {
  state = {
    imgUrl: '',
    isLoaded: false
  };

  componentDidMount() {
    const { featured_media } = this.props.article;
    const getImageUrl = axios.get(
      `https://fesinternet.nl/api/wp-json/wp/v2/media/${featured_media}`
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

  HandleClick = (id) => {
    this.props.onClick(id)
  }

  render() {
    console.log(this.props)
    const { title, id } = this.props.article;
    const { imgUrl, isLoaded  } = this.state;
    if (isLoaded) {
      return (
        <Link to={`/article/${id}`}
        onClick={(e) => this.HandleClick(id)}
        >
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

export default ArticlePage;
