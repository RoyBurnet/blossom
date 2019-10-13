import React, { Component } from 'react';
import Header from '../../components/header/Header';

import "./mainLayout.css"

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Header />
        {this.props.children}
        <div className="footer">
          <div className="footer-content">Whososo</div>
        </div>
      </div>
    );
  }
}
