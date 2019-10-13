import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ArticleImage from '../../components/articleImage/articleImage';

import ArticleThree from '../../components/articleThree/afticleThree';
export default class ArticlePage extends Component {
  state = {
    article: {},
    isLoaded: false
  };

  componentDidMount() {
    axios
      .get(
        `http://localhost:8888/blossom/wp-json/wp/v2/article/${this.props.match.params.id}`
      )
      .then(res => this.setState({ article: res.data, isLoaded: true }));
  }

  render() {
    const { article, isLoaded } = this.state;
    const image = article.featured_media;
    console.log(image);
    if (isLoaded) {
      return (
        <div>
          <ArticleImage imageData={image} />
          <div style={{ maxWidth: '600px', marginLeft: '60px' }}>
            <h1>{article.title.rendered}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: article.content.rendered }}
            ></div>
            <Link to="/">Go Back</Link>
          </div>
          <ArticleThree />
        </div>
      );
    }
    return <h3>Is loading. ...</h3>;
  }
}
