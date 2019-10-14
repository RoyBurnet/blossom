import React, { Component } from 'react';
import axios from 'axios';

import AboutBanner from '../../components/AboutBanner/aboutBanner';

import './About.css';

class About extends Component {
  state = {
    aboutData: {},
    isLoaded: false
  };

  componentDidMount() {
    axios
      .get(`http://localhost:8888/blossom/wp-json/wp/v2/pages/37`)
      .then(res => this.setState({ aboutData: res.data, isLoaded: true }));
  }

  render() {
    const { isLoaded, aboutData } = this.state;
    if (isLoaded) {
      return (
        <div>
          <AboutBanner image={aboutData.featured_media} />
          <div className="AboutContent">
          <h1>{aboutData.title.rendered}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: aboutData.content.rendered }}
            ></div>
          </div>
          <div className="footer-stick">
          <div className="footer-content">Concrete Blossom</div>
        </div>
        </div>
      );
    }

    return <h3>Is Loading...</h3>;
  }
}

export default About;
