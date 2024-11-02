import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../components/Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A modern web app built with React and Firebase.',
      image: 'team-info-gen.png',
      link: 'https://github.com/your-repo/project-one',
    },
    {
      title: 'Project Two',
      description: 'An interactive e-commerce website with a dynamic cart.',
      image: 'pass-gen.png',
      link: 'https://github.com/your-repo/project-two',
    },
    {
      title: 'Project Three',
      description: 'A modern web app built with React and Firebase.',
      image: 'todo.png',
      link: 'https://github.com/your-repo/project-one',
    },
    {
      title: 'Project Four',
      description: 'An interactive e-commerce website with a dynamic cart.',
      image: 'weather-app.png',
      link: 'https://github.com/your-repo/project-two',
    },
    {
      title: 'Project Five',
      description: 'An interactive e-commerce website with a dynamic cart.',
      image: 'Refactor-Hariseon.png',
      link: 'https://github.com/your-repo/project-two',
    },
    {
      title: 'Project Six',
      description: 'A modern web app built with React and Firebase.',
      image: 'quiz-app.png',
      link: 'https://github.com/your-repo/project-one',
    },
    {
      title: 'Project Seven',
      description: 'An interactive e-commerce website with a dynamic cart.',
      image: 'login.png',
      link: 'https://github.com/your-repo/project-two',
    },
    {
      title: 'Project Seven',
      description: 'An interactive e-commerce website with a dynamic cart.',
      image: 'calculator.png',
      link: 'https://github.com/your-repo/project-two',
    },
  ];

  return (
    <Container id="projects" className="portfolio-section">
      <h2>My Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card className="shadow-sm project-card">
              <Card.Img variant="top" src={project.image} alt={project.title} className="project-image" />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button href={project.link} variant="primary" target="_blank">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Portfolio;