import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaFile } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Navbar.css'; // Importing CSS file for Navbar. You can add your styles in this file

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="navbar"> 
      <Navbar.Brand>
        <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>My Portfolio <FaHome /></Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link>
            <Link to="about" spy={true} smooth={true} offset={-70} duration={500}><FaUser /> About Me</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="portfolio" spy={true} smooth={true} offset={-70} duration={500}><FaBriefcase /> Portfolio</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}><FaEnvelope /> Contact</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="resume" spy={true} smooth={true} offset={-70} duration={500}><FaFile /> Resume</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;