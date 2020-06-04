import React, { Component } from "react";
import SectionTitle from "./sectionTitle";
import ProfileAttributes from "./profileAttributes"
import { Row } from 'react-bootstrap';

class Details extends Component {
  render() {
    return (
      <div>
        <Row>
          <SectionTitle name="Details" />
        </Row>
        <Row>
          <ProfileAttributes title="Name:" data="Henrique Feitosa" />
        </Row>
        <Row>
          <ProfileAttributes title="Age:" data="32" />
        </Row>
        <Row>
          <ProfileAttributes title="Location:" data="São Paulo - Brazil" />
        </Row>
        <Row>
          <span className='linkedin-image'>
            <img src='linkedin.png' alt='Henrique Feitosa' />
          </span>
        </Row>
      </div>
    )
  }
}

export default Details;