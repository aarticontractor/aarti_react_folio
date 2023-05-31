import React from 'react';
import { Card } from 'react-bootstrap';
import { FaGithub, FaOctopusDeploy } from 'react-icons/fa';
import styled from 'styled-components';


const Project = ({ project }) => {
    return (
        <StyledCard className="project-card">
            <Card.Img variant="top" src='./api-code-quiz.jpg' />
            <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>
                    {project.description}
                </Card.Text>
                <StyledCardLink href={project.link}><FaGithub /> GitHub Repository
                <StyledCardLink href={project.link2}><FaOctopusDeploy />Deployed Link</StyledCardLink>
                </StyledCardLink>
            </Card.Body>
        </StyledCard>
    );
}

export default Project;

const StyledCard = styled(Card)`
  transition: transform 0.2s ease-in-out;
  background-color:rgb(214, 194, 233);
  border: solid;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const StyledCardLink = styled(Card.Link)`
  display: flex;
  align-items: center;
  color: black;
  

  svg {
    margin-right: 0.5em;
  }
`;
