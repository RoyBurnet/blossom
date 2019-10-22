import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import './articleItem.css';

class ArticleItem extends Component {
  state = {
    imgUrl: '',
    isLoaded: false
  };

  componentDidMount() {
    const { featured_media } = this.props.article;
    const getImageUrl = axios.get(
      `https://fesinternet.nl/api/wp-json/wp/v2/media/${featured_media}`
    );

    Promise.all([getImageUrl])
      .then(res => {
        this.setState({
          imgUrl: res[0].data.media_details.sizes.full.source_url,
          isLoaded: true
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.props)
    const { title, id } = this.props.article;
    const { imgUrl, isLoaded  } = this.state;
    if (isLoaded) {
      return (
        <Link to={`/article/${id}`}
        >
          <Card className="cardBox">
            <Card.Img src={imgUrl} className="image" />
            <Card.ImgOverlay
              style={{
                backgroundColor: '#ff0099',
                opacity: '0.2',
                clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)'
              }}
            >
              <Card.Title style={{ color: 'white', fontSize: '30px' }}>
                {title.rendered}
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
         </Link>
      );
    }
    return <h3>Loading ...</h3>;
  }
}

export default ArticleItem;