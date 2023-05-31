import React from 'react';
import { Element } from 'react-scroll';
import { Container } from 'reactstrap';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Container>
            <Element name="about"><About /></Element>
            <Element name="portfolio"><Portfolio /></Element>
            <Element name="contact"><Contact /></Element>
            <Element name="resume"><Resume /></Element>
        </Container>
        <Footer />
    </div>
  );
}

export default App;