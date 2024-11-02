import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import '../components/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, e.target, process.env.REACT_APP_EMAILJS_USER_ID)
      .then((result) => {
        console.log('Message sent:', result.text);
        alert('Message sent successfully!');
        
        // Clear the input fields
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.log('Error:', error.text);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <Container id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <p className="contact-text">
            Have a project in mind, a question, or just want to say hi? 
            I'm all ears! Fill out the form below, and let's connect!
          </p>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mt-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formMessage" className="mt-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">Send Message</Button>
      </Form>
    </Container>
  );
};

export default Contact;