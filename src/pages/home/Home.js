import React, { Component } from 'react';
import axios from 'axios';
import Articles from '../../components/articles/Articles';
import Image from 'react-bootstrap/Image';

import Player from '../../components/Player/Player';
import NotableEvents from '../../components/NotableEvents/notableEvents'

import './Home.css';

class Home extends Component {
  state = {
    featuredMedia: '',
    isLoaded: false
  };

  componentDidMount() {
    axios
      .get('http://localhost:8888/blossom/wp-json/wp/v2/media/70')
      .then(res =>
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
          <div className="playerWrapper">
            <Player />
          </div>
          <NotableEvents />
        </div>
      );
    }
    return <h3>Is Loading...</h3>;
  }
}

export default Home;
