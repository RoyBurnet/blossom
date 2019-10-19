import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import axios from 'axios';

export default class NotableImage extends Component {
  state = {
    notableImage: '',
    isLoaded: false
  };

  componentDidMount() {
    axios
      .get(
        `https://fesinternet.nl/api/wp-json/wp/v2/media/${this.props.image}`
      )
      .then(res =>
        this.setState({
          notableImage: res.data,
          isLoaded: true
        })
      );
  }

  render() {
    const { notableImage, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <>
          <Image
            className="img"
            fluid
            style={{ height: '100%' }}
            src={notableImage.source_url}
          />
        </>
      );
    }
    return <h3>Is Loading...</h3>;
  }
}
