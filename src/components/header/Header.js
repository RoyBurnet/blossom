import React, { Component} from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

import Image from 'react-bootstrap/Image';
import logo from '../../images/cblogo.svg';
import "./Header.css"
  
  export default class Header extends Component {
    render() {
      return (
        <Navbar  bg="light" expand="lg" collapseOnSelect style={{height: "100px"}}>
        <Navbar.Brand href="/"><Image src={logo} className="menulogo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to={'/'}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to={'/contact'}>
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to={'/about'}>
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      )
    }
  }

