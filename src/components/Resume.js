import React from 'react';
import { Button, ListGroup, ListGroupItem, Container } from 'reactstrap';

// A hypothetical component that takes a job or education experience as props
import ExperienceItem from './ExperienceItem';

import './Resume.css';

const Resume = () => {

  // Simulated data for job/education experiences
  const experiences = [
    {
      title: 'Coding Bootcamp Student',
      organization: 'University of California, Berkeley',
      duration: '2022 - Present',
      
    },
    {
      title: 'Talent Specialist',
      organization: 'Collabera Technologies',
      duration: 'Jul 2021 - Oct 2022',
     
    },
    {
        title: 'Masters in Human Resources',
        organization: 'Sardar Patel University ',
        duration: '2019 - 2021',
        
      },
      {
        title: 'Bachelor of Science-Plant Biology',
        organization: 'Maharaja Sayajiroa University of Baroda',
        duration: '2015 - 2018',
        
      },
    
  ];

  return (
    <Container style={{ height: '100vh'}}>
    <div className="resume">
      <h1 className="display-3">Resume</h1>
      <p className="lead">Download my Resume</p>
      <hr className="my-2" />

      <h2>Skills:</h2>
      <ListGroup>
        <ListGroupItem color="dark">HTML/CSS/JavaScript</ListGroupItem>
        <ListGroupItem color="dark">APIs (REST, Web, GraphQL)</ListGroupItem>
        <ListGroupItem color="dark">Test-Driven Deployment (TDD)</ListGroupItem>
        <ListGroupItem color="dark">MongoDB, Express, React, NodeJs(MERN Stack)</ListGroupItem>
        <ListGroupItem color="dark">Object Oriented Programming(OOP)</ListGroupItem>
        
      </ListGroup>

      <h2>Education & Experience :</h2>
      {experiences.map((experience, index) =>
        <ExperienceItem 
          key={index}
          title={experience.title}
          organization={experience.organization}
          duration={experience.duration}
          description={experience.description}
          right={index % 2 === 0}

        />
      )}

      <p className="lead">
        <Button color="primary" href="/path-to-your-resume.pdf" download>
          Download
        </Button>
      </p>
    </div>
    </Container>
  );
};

export default Resume;