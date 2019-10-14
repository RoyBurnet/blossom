import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import NotableImg from '../NotableEvents/NotebleImg';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

export default class notableEvents extends Component {
  state = {
    event1: {},
    event2: {},
    event3: {},
    isLoaded: false
  };

  componentDidMount() {
    axios.get(`http://test.fesinternet.nl/wp-json/wp/v2/event`).then(res => {
      this.setState({
        event1: res.data[0],
        event2: res.data[1],
        event3: res.data[2],
        isLoaded: true
      });
    });
  }

  render() {
    const { isLoaded, event1, event2, event3 } = this.state;
    console.log(this.state);
    if (isLoaded) {
      return (
        <div>
          <h2>Notable Events</h2>

          <Container>
            <Row>
              <Col>
              <Link to={`/event/${event1.id}`}>
                <Card className="cardBox">
                  <NotableImg image={event1.featured_media} />
                  <Card.ImgOverlay
                    style={{
                      backgroundColor: 'white',
                      opacity: '0.7',
                      clipPath: 'polygon(0 0, 0 100%, 100% 0)'
                    }}
                  >
                    <Card.Title style={{ color: '#ff0099', fontSize: '30px' }}>
                      {event1.title.rendered}
                    </Card.Title>
                  </Card.ImgOverlay>
                </Card>
                </Link>
              </Col>
              <Col>
              <Link to={`/event/${event2.id}`}>
                <Card className="cardBox">
                  <NotableImg image={event2.featured_media} />
                  <Card.ImgOverlay
                    style={{
                      backgroundColor: 'white',
                      opacity: '0.7',
                      clipPath: 'polygon(0 0, 0 100%, 100% 0)'
                    }}
                  >
                    <Card.Title style={{ color: '#ff0099', fontSize: '30px' }}>
                      {event2.title.rendered}
                    </Card.Title>
                  </Card.ImgOverlay>
                </Card>
                </Link>
              </Col>
              <Col>
              <Link to={`/event/${event3.id}`}>
                <Card className="cardBox">
                  <NotableImg image={event3.featured_media} />
                  <Card.ImgOverlay
                    style={{
                      backgroundColor: 'white',
                      opacity: '0.7',
                      clipPath: 'polygon(0 0, 0 100%, 100% 0)'
                    }}
                  >
                    <Card.Title style={{ color: '#ff0099', fontSize: '30px' }}>
                      {event3.title.rendered}
                    </Card.Title>
                  </Card.ImgOverlay>
                </Card>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
    return <h3>Is Loading ....</h3>;
  }
}
