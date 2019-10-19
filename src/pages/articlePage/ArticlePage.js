import React, { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import ArticleImage from '../../components/articleImage/articleImage';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './ArticlePage.css';

import ArticleItem from '../../components/articleItem/articleItem';
// import ArticleThree from '../../components/articleThree/afticleThree';
class ArticlePage extends Component {
  state = {
    article: {},
    isLoaded: false,
    articles: [],
    trigger: false
  };


  componentDidMount() {
    const getArticle = axios.get(
      `https://fesinternet.nl/api/wp-json/wp/v2/article/${this.props.match.params.id}`
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

  // componentWillReceiveProps(nextProps) {
    
  //   if (nextProps.history.location.pathname !== this.props.location.pathname) {
  //     const getArticle = axios.get(
  //       `https://fesinternet.nl/api/wp-json/wp/v2/article/${this.props.match.params.id}`
  //     );

  //     Promise.all([getArticle]).then(res => {
  //       this.setState({
  //         article: res[0].data
  //       });
  //     });
  //   }
  //   //  this.props.history.push(`${nextProps.history.location.pathname}`)
  // }

  render() {
    const { article, isLoaded, articles, media} = this.state;
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
                  <ArticleItem
                    articleImg={media}
                    article={article}
                    key={article.id}
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

export default withRouter(ArticlePage);
