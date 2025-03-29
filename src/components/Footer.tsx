import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import '../styles/Footer.css';
import axios from 'axios';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages

    try {
      const response = await axios.post('http://maptapp.atwebpages.com/api/post_subscribe.php', {
        email,
      });

      if (response.data.status === 'success') {
        setMessage('🎉 You have successfully subscribed!');
        setEmail(''); // Clear the email input field
      } else {
        setMessage('❌ ' + response.data.message);
      }
    } catch (error) {
      console.error('Error occurred:', error);
      setMessage('❌ Something went wrong. Please try again.');
    }

    // Clear message after 3 seconds
    setTimeout(() => setMessage(''), 3000);
  };
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="footer"
    >
      <Container>
        <Row className="py-4">
          <Col md={4}>
            <h5>MAPT</h5>
            <p>"Go with, Your Flow"</p>
          </Col>
          
          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: info@mapt.se</p>
            <p>Phone: +46 123 456 789</p>
          </Col>
        </Row>

        <Row className="py-4 border-top">
          <Col md={6}>
            <h5>Subscribe to MAPT</h5>
            <p>
              Join our newsletter for exclusive travel inspiration, Swedish adventures, 
              and European dream destinations from MAPT.
            </p>
            <Form onSubmit={handleSubmit} className="d-flex">
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="me-2"
                required
              />
              <Button variant="primary" type="submit">
                Subscribe
              </Button>
            </Form>
            {message && <p className="message">{message}</p>}
          </Col>
          <Col md={6} className="text-md-end mt-4 mt-md-0">
            <h5>Follow Us</h5>
            <div>
              <a
                href="https://facebook.com/mapt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-3"
              >
               <>{FaFacebook({ size: 24 })}</>
              </a>
              <a
                href="https://instagram.com/mapt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <>{FaInstagram({ size: 24 })}</>
              </a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="text-center py-3">
            <p>© {new Date().getFullYear()} MAPT. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </motion.footer>
  );
};

export default Footer;