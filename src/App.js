import React from 'react';
import './App.css';
import Profile from './components/profile/profile';
import Experiences from './components/experiences/experiences'
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row className='justify-content-center'>
          <Col />
          <Col sm='7'>
            <Profile />
            <Experiences />
          </Col>
          <Col />
        </Row>
      </Container>
    </div >
  );
}

export default App;
