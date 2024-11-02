import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center text-center">
          <Col md={12}>
            <p className="footer-text">© 2024 Hammed. All Rights Reserved.</p>
          </Col>
          <Col md={12} className="social-icons">
            <a href="http://www.linkedin.com/in/abdulhamidoduola" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
            <a href="https://github.com/hoduola5" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
            <a href="https://twitter.com/oduolaabdulham2" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="icon" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;