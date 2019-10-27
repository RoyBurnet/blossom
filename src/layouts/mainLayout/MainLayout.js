import React, { Component } from 'react';
import Header from '../../components/header/Header';

import "./mainLayout.css"

export default class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        {this.props.children}
        <div className="footer-stick">
            <div className="footer-content">Concrete Blossom</div>
          </div>
      </>
    );
  }
}
