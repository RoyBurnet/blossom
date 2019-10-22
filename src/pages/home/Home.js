import React, { Component } from 'react';
import axios from 'axios';
import Articles from '../../components/articles/Articles';
import Image from 'react-bootstrap/Image';

import Player from '../../components/Player/Player';
import NotableEvents from '../../components/NotableEvents/notableEvents';

import './Home.css';
import ArticleThree from '../../components/articleThree/afticleThree';

class Home extends Component {
  state = {
    featuredMedia: '',
    isLoaded: false
  };

  componentDidMount() {
    axios.get('https://fesinternet.nl/api//wp-json/wp/v2/media/70').then(res =>
      this.setState({
        featuredMedia: res.data.source_url,
        isLoaded: true
      })
    );
  }

  render() {
    const { featuredMedia, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <div>
          <div className="banner">
            <Image className="img" fluid src={featuredMedia} />
          </div>
          <Articles />
          {/* <ArticleThree/> */}
          <div className="playerWrapper">
            <Player />
          </div>
          {/* <NotableEvents /> */}
          <div className="footer" style={{ maxHeight: '30px' }}>
            <div className="footer-content">Concrete Blossom</div>
          </div>
        </div>
      );
    }
    return <h3>Is Loading...</h3>;
  }
}

export default Home;
