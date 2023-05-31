import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import styled from 'styled-components';

import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

import profileImage from '../mypic1.jpg'; // Replace this with path to your actual image

const About = () => {
  return (
    <Container className="about-section" style={{ marginTop: '80px', minHeight: 'calc(100vh - 80px)' }}>
      <Row className="align-items-center">
        <Col md={6} className="text-center">
          <Flip left>
            <ProfileImage src={profileImage} roundedCircle fluid className="profile-image" />
          </Flip>
        </Col>
        <Col md={6} className="text-center">
          <Fade bottom>
            <div>
              <h2>About Me</h2>
              <p>HI!</p>
              <p>I am Aarti Contractor</p>
              <p>UC Berkeley Bootcamp Student</p>
              <p>I am an aspiring full-stack developer and currently in training with UC Berkeley's 2023 Full Stack Coding Bootcamp.</p>
              <p>Do check out my work profile and feel free to contact me!</p>
            </div>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

const ProfileImage = styled(Image)`
  margin: 0 auto;
  height: 250px;
  width: 250px;
  display: block;
`;

