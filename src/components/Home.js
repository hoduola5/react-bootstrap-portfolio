import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles.css'

const Home = () => {
  return (
    <Container fluid className="home-section" id="home">
      <Row className="align-items-center text-center">
        <Col md={12}>
          <h1 className="home-title">Hello, I'm Hammed</h1>
          <p className="home-subtitle">A Passionate Software Engineer</p>
          <Button href="#contact" variant="outline-light" className="home-button">Contact Me</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;