import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import './aboutBanner.css';

export default class AboutBanner extends Component {
  state = {
    bannerImage: '',
    isLoaded: false
  };

  componentDidMount() {
    axios
      .get(
        `https://fesinternet.nl/api//wp-json/wp/v2/media/${this.props.image}`
      )
      .then(res =>
        this.setState({
          bannerImage: res.data.source_url,
          isLoaded: true
        })
      );
  }

  render() {
    return (
      <div className="banner">
        <Image className="img" src={this.state.bannerImage} />
      </div>
    );
  }
}
