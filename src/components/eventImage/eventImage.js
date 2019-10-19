import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import './eventImage.css';

export default class EventImage extends Component {
  state = {
    eventImage: '',
    isLoaded: false
  };
  componentDidMount() {
    axios
      .get(
        `https://fesinternet.nl/api/wp-json/wp/v2/media/${this.props.image}`
      )
      .then(res =>
        this.setState({
          eventImage: res.data.source_url,
          isLoaded: true
        })
      );
  }

  render() {
    return (
      <div className="banner">
        <Image className="img" fluid src={this.state.eventImage} />
      </div>
    );
  }
}
