// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';


// const Footer = () => {
//     return (
//         <Container fluid className="footer-section">
//             <Row className="justify-content-center">
//                 <Col md={6} className="text-center footer-col">
//                     <p>&copy; Copyright 2023 Aarti Contractor</p>
//                     <a href="https://github.com/aarticontractor" target="_blank" rel="noreferrer"><FaGithub size={24} /></a>
//                     <a href="https://linkedin.com/in/aarti-contractor" target="_blank" rel="noreferrer"><FaLinkedin size={24} /></a>
//                     <a href="https://medium.com/@aarticontractor" target="_blank" rel="noreferrer"><FaMedium size={24} /></a>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

// export default Footer;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import styled from 'styled-components';
import './Footer.css'


const Footer = () => {
    return (
        <Container fluid className="footer-section">
            <Row className="justify-content-center">
                <Col md={6} className="text-center footer-col">
                    <p>&copy; 2023 Aarti Contractor</p>
                    {/* <a href="https://github.com/yourusername" target="_blank" rel="noreferrer"><FaGithub size={24} /></a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer"><FaLinkedin size={24} /></a>
                     */}

                        <SocialMedia>
                        <a href="https://medium.com/@aarticontractor" target="_blank" rel="noreferrer"><FaMedium /></a>
                        <a href="https://github.com/aarticontractor" target="_blank" rel="noreferrer"><FaGithub /></a>
                        <a href="https://linkedin.com/in/aarti-contractor" target="_blank" rel="noreferrer"><FaLinkedin /></a>    
                        </SocialMedia>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;


const SocialMedia = styled.div`
    margin-top: 1rem;
    font-size: 2rem;
    display: flex;
    justify-content: space-around;
    
    * {
        transition: all 0.2s ease-in-out;
        
        &:hover {
            transform: scale(1.2);
            color: #007bff;
        }
    }
`;