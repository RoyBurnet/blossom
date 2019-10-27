import React, { Component } from 'react';
import axios from 'axios';

import Banner from '../../components/Banner/Banner';

import './About.css';

class About extends Component {
  state = {
    aboutData: {},
    isLoaded: false
  };

  componentDidMount() {
    axios
      .get(`https://fesinternet.nl/api/wp-json/wp/v2/pages/37`)
      .then(res => this.setState({ aboutData: res.data, isLoaded: true }));
  }

  render() {
    const { isLoaded, aboutData } = this.state;
    if (isLoaded) {
      return (
        <div>
          <Banner image={aboutData.featured_media} />
          <div className="AboutContent">
            <h1>{aboutData.title.rendered}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: aboutData.content.rendered }}
            ></div>
          </div>
        </div>
      );
    }

    return <h3>Is Loading...</h3>;
  }
}

export default About;
