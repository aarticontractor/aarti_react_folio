import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg" className="header-nav">
            <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link to="/" className="header-link">About Me</Link>
                    <Link to="/portfolio" className="header-link">Portfolio</Link>
                    <Link to="/contact" className="header-link">Contact</Link>
                    <Link to="/resume" className="header-link">Resume</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;