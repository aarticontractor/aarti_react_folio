import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Project from './Project';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';


const Portfolio = () => {
    const projects = [
        {title: '🎵JamFolio🎵', image: '../images/JamFolio-Project2.jpg' , description: 'JamFolio is an application that allows musicians to connect to employers, venues, fans, and other musicians by listing their discography and experience.', link: 'https://github.com/jeppjeppjepp0/JamFolio', link2: 'https://jamfolio.herokuapp.com/' },
        {title: 'NomadApp✈️Your encyclopedia for travel!', image: 'path_to_your_image', description: 'The NomadApp is a web application designed to provide users with information about a city, including details about the city history and current weather conditions.', link: 'https://github.com/aarticontractor/vacation_guide_project', link2: 'https://aarticontractor.github.io/vacation_guide_project/' },
        {title: 'Weather Dashboard🌞', image: 'path_to_your_image', description: 'Weather Dashbaord is a (5) Day Weather Forecast application that provides georgraphical weather information when given by a city name using the OpenWeatherMap APIs.', link: 'https://aarticontractor.github.io/weather-dashboard/', link2: 'https://aarticontractor.github.io/weather-dashboard/' },
        {title: 'Web API Code Quiz⌛', image: 'path_to_your_image', description: 'The coding quiz features multiple choice questions on JavaScript, a timer, a pop-up to submit the users name and a prompt to view the top 10 highest scores', link: 'https://aarticontractor.github.io/api-code-quiz/', link2: 'https://aarticontractor.github.io/api-code-quiz/' },
        {title: 'PWA Text Editor💬', image: 'path_to_your_image', description: 'The app is a single-page application that meets the PWA criteria. Additionally, it features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. ', link: 'https://github.com/aarticontractor/pwa-text-editor', link2: 'https://pwa-edit-text.herokuapp.com/' },
        {title: 'MVC Tech Blog📝', image: 'path_to_your_image', description: 'MVC Tech Blog is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers posts as well. ', link: 'https://github.com/aarticontractor/mvc_tech-blog', link2: 'https://mvc-tech-blog-aarti.herokuapp.com/' },
      
    ];
    
 
    return (
        <Container className="portfolio-section" style={{ height: '100vh'}}>
            <Row> 
                {projects.map((project, index) => (
                    <Col md={6} key={index}>
                        <Fade bottom>
                            <Project project={project} />
                        </Fade>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Portfolio;