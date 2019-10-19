import React, { Component } from 'react';
import axios from 'axios';
import EventImage from '../../components/eventImage/eventImage';
import { Link } from 'react-router-dom';

import NotableEvents from '../../components/NotableEvents/notableEvents';

import './evnetPage.css';

export default class EventPage extends Component {
  state = {
    event: {},
    isLoaded: false
  };
  componentDidMount() {
    axios
      .get(
        `https://fesinternet.nl/api/wp-json/wp/v2/event/${this.props.match.params.id}`
      )
      .then(res =>
        this.setState({
          event: res.data,
          isLoaded: true
        })
      );
  }
  render() {
    const { event, isLoaded } = this.state;
    const image = event.featured_media;
    if (isLoaded) {
      return (
        <div className="eventPageContent">
          <EventImage image={image} />
          <div style={{ maxWidth: '600px', marginLeft: '60px' }}>
            <h1>{event.title.rendered}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: event.content.rendered }}
            ></div>
            <Link to="/">Go Back</Link>
          </div>
          {/* <NotableEvents /> */}
        </div>
      );
    }
    return <h3>Is Loading .. .</h3>;
  }
}
