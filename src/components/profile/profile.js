import React, { Component } from 'react';
import AboutMe from './aboutMe';
import Photo from './profilePhoto';
import Details from './details';
import './profile.css'
import { Row, Col } from 'react-bootstrap';

class profile extends Component {
  render() {
    return (
      <Col lg='12'>
        <Row className='justify-content-center'>
          <h1>
            Profile
          </h1>
        </Row>
        <Row className='justify-content-center'>
          <span className='subtitle'>
            Software Engineer | Passionate Rubyist
          </span>
        </Row>
        <hr />
        <Row>
          <Col sm='4'>
            <AboutMe />
          </Col>
          <Col sm='5'>
            <Photo />
          </Col>
          <Col sm='3'>
            <Details />
          </Col>
        </Row>
      </Col>
    )
  }
}

export default profile;