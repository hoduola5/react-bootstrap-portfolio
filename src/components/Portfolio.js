import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../components/Portfolio.css';

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Team Information Generator',
      description: 'A modern web app built with React and Firebase.',
      image: 'team-info-gen.png',
      link: 'https://github.com/hoduola5/Team_Info_Gen',
      liveProject: ''
    },
    {
      id: 2,
      title: 'Password Generator',
      description: 'An interactive e-commerce website with a dynamic cart.',
      image: 'pass-gen.png',
      link: 'https://github.com/hoduola5/Password-Gen',
      liveProject: 'https://hoduola5.github.io/Password-Gen/'
    },
    {
      id: 3,
      title: 'Todo App',
      description: 'A modern web app built with React and Firebase.',
      image: 'todo.png',
      link: 'https://github.com/hoduola5/React-Todo-App',
      liveProject: 'https://react-todo-app-bayo.netlify.app/'
    },
    {
      id: 4,
      title: 'Weather Dashboard App',
      description: 'An interactive e-commerce website with a dynamic cart.',
      image: 'weather-app.png',
      link: 'https://github.com/hoduola5/Weather-Dashboard-Server-side-API',
      liveProject: 'https://weather-dashboard-server-side-api.netlify.app/'
    },
    {
      id: 5,
      title: 'Refactor Hariseon',
      description: 'An interactive e-commerce website with a dynamic cart.',
      image: 'Refactor-Hariseon.png',
      link: 'https://github.com/hoduola5/Refactor-Hariseon-Codebase',
      liveProject: 'https://hoduola5.github.io/Refactor-Hariseon-Codebase/'
    },
    {
      id: 6,
      title: 'Quiz App',
      description: 'A modern web app built with React and Firebase.',
      image: 'quiz-app.png',
      link: 'https://github.com/hoduola5/Quiz-App',
      liveProject: 'https://hoduola5.github.io/Quiz-App/'
    },
    {
      id: 7,
      title: 'Simple Login',
      description: 'An interactive e-commerce website with a dynamic cart.',
      image: 'login.png',
      link: 'https://github.com/hoduola5/login-page',
      liveProject: 'https://hoduola5.github.io/login-page/'
    },
    {
      id: 8,
      title: 'Calculator',
      description: 'An interactive e-commerce website with a dynamic cart.',
      image: 'calculator.png',
      link: 'https://github.com/hoduola5/calculator-app',
      liveProject: 'https://github.com/your-repo/project-two'
    },
  ];

  const handleViewProject = (id) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (
    <Container id="projects" className="portfolio-section">
      <h2>My Projects</h2>
      <Row>
        {projects.map((project) => (
          <Col md={6} key={project.id} className="mb-4">
            <Card className="project-card shadow-sm">
              <div className="card-image-container">
                <Card.Img variant="top" src={project.image} alt={project.title} />
              </div>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button 
                  variant="primary" 
                  onClick={() => handleViewProject(project.id)}
                  aria-expanded={activeProject === project.id}
                >
                  View Project
                </Button>

                {/* Conditional rendering of "Source Code" and "Live Project" buttons */}
                {activeProject === project.id && (
                  <div className="mt-3">
                    <Button 
                      href={project.link} 
                      variant="secondary" 
                      target="_blank" 
                      className="me-2"
                    >
                      Source Code
                    </Button>
                    <Button 
                      href={project.liveProject} 
                      variant="success" 
                      target="_blank"
                    >
                      Live Project
                    </Button>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Portfolio;







// import React, { useState } from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import '../components/Portfolio.css';

// const Portfolio = () => {
//   const [activeProject, setActiveProject] = useState(null);

//   const projects = [
    // {
    //   title: 'Project One',
    //   description: 'A modern web app built with React and Firebase.',
    //   image: 'team-info-gen.png',
    //   link: 'https://github.com/your-repo/project-one',
    // },
    // {
    //   title: 'Project Two',
    //   description: 'An interactive e-commerce website with a dynamic cart.',
    //   image: 'pass-gen.png',
    //   link: 'https://hoduola5.github.io/Password-Gen/',
    // },
    // {
    //   title: 'Project Three',
    //   description: 'A modern web app built with React and Firebase.',
    //   image: 'todo.png',
    //   link: 'https://github.com/your-repo/project-one',
    // },
    // {
    //   title: 'Project Four',
    //   description: 'An interactive e-commerce website with a dynamic cart.',
    //   image: 'weather-app.png',
    //   link: 'https://github.com/your-repo/project-two',
    // },
    // {
    //   title: 'Project Five',
    //   description: 'An interactive e-commerce website with a dynamic cart.',
    //   image: 'Refactor-Hariseon.png',
    //   link: 'https://hoduola5.github.io/Refactor-Hariseon-Codebase/',
    // },
    // {
    //   title: 'Project Six',
    //   description: 'A modern web app built with React and Firebase.',
    //   image: 'quiz-app.png',
    //   link: 'https://hoduola5.github.io/Quiz-App/',
    // },
    // {
    //   title: 'Project Seven',
    //   description: 'An interactive e-commerce website with a dynamic cart.',
    //   image: 'login.png',
    //   link: 'https://hoduola5.github.io/login-page/',
    // },
    // {
    //   title: 'Project Seven',
    //   description: 'An interactive e-commerce website with a dynamic cart.',
    //   image: 'calculator.png',
    //   link: 'https://github.com/your-repo/project-two',
    // },
//   ];

//   const handleViewProject = (id) => {
//     setActiveProject(activeProject === id ? null : id);
//   };

//   return (
//     <Container id="projects" className="portfolio-section">
//       <h2>My Projects</h2>
//       <Row>
//         {projects.map((project) => (
//           <Col md={6} key={project.id} className="mb-4">
//             <Card className="shadow-sm">
//               <Card.Img variant="top" src={project.image} alt={project.title} />
//               <Card.Body>
//                 <Card.Title>{project.title}</Card.Title>
//                 <Card.Text>{project.description}</Card.Text>
//                 <Button 
//                   variant="primary" 
//                   onClick={() => handleViewProject(project.id)}
//                   aria-expanded={activeProject === project.id}
//                 >
//                   View Project
//                 </Button>

//                 {/* Conditional rendering of "Source Code" and "Live Project" buttons */}
//                 {activeProject === project.id && (
//                   <div className="mt-3">
//                     <Button 
//                       href={project.link} 
//                       variant="secondary" 
//                       target="_blank" 
//                       className="me-2"
//                     >
//                       Source Code
//                     </Button>
//                     <Button 
//                       href={project.liveProject} 
//                       variant="success" 
//                       target="_blank"
//                     >
//                       Live Project
//                     </Button>
//                   </div>
//                 )}
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Portfolio;






// import React from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import '../components/Portfolio.css';

// const Portfolio = () => {
//   const projects = [
//     {
//       title: 'Project One',
//       description: 'A modern web app built with React and Firebase.',
//       image: 'team-info-gen.png',
//       link: 'https://github.com/your-repo/project-one',
//     },
//     {
//       title: 'Project Two',
//       description: 'An interactive e-commerce website with a dynamic cart.',
//       image: 'pass-gen.png',
//       link: 'https://hoduola5.github.io/Password-Gen/',
//     },
//     {
//       title: 'Project Three',
//       description: 'A modern web app built with React and Firebase.',
//       image: 'todo.png',
//       link: 'https://github.com/your-repo/project-one',
//     },
//     {
//       title: 'Project Four',
//       description: 'An interactive e-commerce website with a dynamic cart.',
//       image: 'weather-app.png',
//       link: 'https://github.com/your-repo/project-two',
//     },
//     {
//       title: 'Project Five',
//       description: 'An interactive e-commerce website with a dynamic cart.',
//       image: 'Refactor-Hariseon.png',
//       link: 'https://hoduola5.github.io/Refactor-Hariseon-Codebase/',
//     },
//     {
//       title: 'Project Six',
//       description: 'A modern web app built with React and Firebase.',
//       image: 'quiz-app.png',
//       link: 'https://hoduola5.github.io/Quiz-App/',
//     },
//     {
//       title: 'Project Seven',
//       description: 'An interactive e-commerce website with a dynamic cart.',
//       image: 'login.png',
//       link: 'https://hoduola5.github.io/login-page/',
//     },
//     {
//       title: 'Project Seven',
//       description: 'An interactive e-commerce website with a dynamic cart.',
//       image: 'calculator.png',
//       link: 'https://github.com/your-repo/project-two',
//     },
//   ];

//   return (
//     <Container id="projects" className="portfolio-section">
//       <h2>My Projects</h2>
//       <Row>
//         {projects.map((project, index) => (
//           <Col md={6} key={index} className="mb-4">
//             <Card className="shadow-sm project-card">
//               <Card.Img variant="top" src={project.image} alt={project.title} className="project-image" />
//               <Card.Body>
//                 <Card.Title>{project.title}</Card.Title>
//                 <Card.Text>{project.description}</Card.Text>
//                 <Button href={project.link} variant="primary" target="_blank">View Project</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Portfolio;