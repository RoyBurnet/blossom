import React, { Component } from 'react';
import axios from 'axios';
import Articles from '../../components/articles/Articles';
import Image from 'react-bootstrap/Image';

import Player from '../../components/Player/Player';
import NotableEvents from '../../components/NotableEvents/notableEvents';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Grid from 'react-bootstrap/';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <Container>
          <Row>
            <Col md="12">
              {/* <div className="banner"> */}
              <Image
                className="img"
                fluid
                src={featuredMedia}
                style={{ height: '300px' }}
              />
              {/* </div> */}
            </Col>

            <Col md="12">
              <Articles className="articles" />
            </Col>
            <Col md="12">
              <div className="playerWrapper" style={{ height: '200px' }}>
                <Player />
              </div>
            </Col>
          </Row>
        </Container>
      );
    }
    return <h3>Is Loading...</h3>;
  }
}

export default Home;
