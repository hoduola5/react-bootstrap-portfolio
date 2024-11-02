import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../components/About.css';

const About = () => {
  const skills = [
    { name: 'React', description: 'Building UI components', icon: '⚛️' },
    { name: 'JavaScript', description: 'Programming language', icon: '📜' },
    { name: 'Node.js', description: 'Server-side development', icon: '🌐' },
    { name: 'HTML', description: 'Markup language for creating web pages', icon: '🔤' },
    { name: 'CSS', description: 'Styling web pages', icon: '🎨' },
    { name: 'Bootstrap', description: 'CSS framework for responsive design', icon: '🅱️' },
    { name: 'Chakra UI', description: 'Accessible React component library', icon: '🌈' },
    { name: 'Material UI', description: 'React component library with ready-made components', icon: '📦' },
    { name: 'Git and GitHub', description: 'Version control and code collaboration', icon: '🔧' },
  ];

  return (
    <Container id="about" className="about-section">
      <h2>About Me</h2>
      <Row className="justify-content-center">
        <Col md={10} className="text-center">
          <h3>I'm Hammed Oduola</h3>
          <p>
            I'm a software engineer focused on delivering high-quality, responsive web applications. I have a passion for building scalable solutions using modern technologies.
          </p>
          <h4>Skills</h4>
          <Row className="justify-content-center">
            {skills.map((skill, index) => (
              <Col key={index} md={3} className="mb-3">
                <Card className="skill-card">
                  <Card.Body>
                    <Card.Title>{skill.icon} {skill.name}</Card.Title>
                    <Card.Text>{skill.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          {/* Download Resume Button */}
          <a 
            href="https://docs.google.com/document/d/1K7QppfFxMJk3cOaeu2RcKvZDRiAgFLm1StBjexg7V7k/export?format=pdf" 
            target="_blank" 
            rel="noopener noreferrer">
            <Button variant="primary" className="download-btn">
              Download Resume
            </Button>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default About;