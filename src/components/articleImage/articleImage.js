import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import "./articleImage.css"

export default class articleImage extends Component {
  state = {
    articleImage: '',
    isLoaded: false
  };
  componentDidMount() {
    axios
      .get(
        `http://localhost:8888/blossom/wp-json/wp/v2/media/${this.props.imageData}`
      )
      .then(res =>
        this.setState({
          articleImage: res.data.source_url,
          isLoaded: true
        })
      );
  }

  render() {
    return (
      <div className="banner">
        <Image className="img" fluid src={this.state.articleImage} />
      </div>
    );
  }
}
