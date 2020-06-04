import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Experience from './experience';

import './experiences.css'


class Experiences extends Component {
  render() {
    let achievements = [
      'Created and launched an application to provide hosting services inside virtual machines. This application offers a panel where the customers are able to manage all resources related to the hosting like attach and create new databases, manage DNS routes, create and manage load-balancer, CDN, backup and auto-scale.',
      'As a Senior Engineer, my responsibility is to help the other team members, show the best technology options to each new application, create a best practice guide and be sure that we are following the best market trends.',
      'Delivered 2 new products that in the first year reach more than 1000 customers',
      'Created a guide with best practices, improved the team knowledge about SOLID principles, DRY, KISS and other design patterns and upgraded 5 applications to the newest version of the Ruby and Rails',
      'Technologies: Ruby, Rails, Elixir, Redis, MySQL, Phoenix, Javascript, Nginx, Apache, Sidekiq, React, Sinatra, Docker, InfluxDB'
    ]
    return (
      <Col className='Experiences sm-12 mt-10'>
        <Row className='justify-content-center'>
          <h1>
            Experiences
            </h1>
        </Row>
        <hr />
        <Row className='justify-content-center'>
          <Experience
            role='Software Engineer'
            company='Locaweb'
            location='São Paulo'
            period='2019-Now'
            description='Locaweb is one of the biggest internet/cloud services providers in Brazil, has more than 2.000 employers and 200 developers.'
            achievements={achievements}
          />
        </Row>
      </Col>
    )
  }
}

export default Experiences;