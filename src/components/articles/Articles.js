import React, { Component } from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ArticleItem from '../articleItem/articleItem';

export default class Articles extends Component {
  state = {
    articles: [],
    isLoaded: false
  };

  componentDidMount() {
    axios
      .get('http://test.fesinternet.nl/wp-json/wp/v2/article?per+page=6')
      .then(res =>
        this.setState({
          articles: res.data,
          isLoaded: true
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    const { articles, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <Container>
          <Row>
            {articles.map(article => (
              <Col xs>
                <ArticleItem article={article} key={article.id} />
              </Col>
            ))}
          </Row>
        </Container>
      );
    }
    return <h3>Loading...</h3>;
  }
}
