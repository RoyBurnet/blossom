import React, { Component } from 'react'
import Header from '../../components/header/Header'

import "./MainLayout.css"

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Header className="menuHead" />
        {this.props.children}

      </div>
    )
  }
}
