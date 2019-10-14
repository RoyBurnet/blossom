import React, { Component } from 'react';
import axios from 'axios';

import ContactBanner from '../../components/AboutBanner/aboutBanner';

import './Contact.css';

class Contact extends Component {
  state = {
    contactPageData: {},
    isLoaded: false
  };

  componentDidMount() {
    axios
      .get(`https://fesinternet.nl/api/wp-json/wp/v2/pages/74`)
      .then(res =>
        this.setState({ contactPageData: res.data, isLoaded: true })
      );
  }

  render() {
    const { isLoaded, contactPageData } = this.state;
    if (isLoaded) {
      return (
        <div>
          <ContactBanner image={contactPageData.featured_media} />
          <div className="contactContent">
            <h1>{contactPageData.title.rendered}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: contactPageData.content.rendered
              }}
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

export default Contact;
