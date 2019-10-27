import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/Form';
import FormText from 'react-bootstrap/FormText';
import InputGroup from 'react-bootstrap/InputGroup';

export default class nieuwsbrief extends Component {
  render() {
    return (
      <div className="mailwrapper">
      <div className="content">
      <h2
              style={{color: "#ff0099", fontWeight: "bold" }}
            >
              MELD JE NU AAN VOOR DE NIEUWSBRIEF
            </h2>
      <div
        style={{
          padding: '20px 20px',
          backgroundColor: '#f3f3f4',
          marginBottom: '40px'
        }}
      >
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Meld je aan voor onze nieuwsbrief</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>First and last name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl />
            <FormControl />
          </InputGroup>
        </Form>
      </div>
      </div>
      </div>
    );
  }
}
