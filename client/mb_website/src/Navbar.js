import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';
import logo from './logo.jpg'; // Adjust the path to your logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons'; // Import the phone icon

const NavigationBar = () => {
    const [expanded, setExpanded] = useState(false);
    const whatsappNumber = '+972548439982'; // Replace with the owner's phone number
    const phoneNumber = '+972515887084'; // Replace with the owner's phone number
    const message = 'Hello, I would like to contact you regarding your website.';
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    const phoneLink = `tel:${phoneNumber}`; // Link to open the phone app

    return (
        <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded} className="custom-navbar">
            <Container className="custom-container">
                <Navbar.Toggle 
                    aria-controls="basic-navbar-nav" 
                    onClick={() => setExpanded(expanded ? false : "expanded")}
                    className="custom-toggler"
                />
                <Navbar.Brand href="/" className="custom-brand">
                    <img src={logo} alt="Logo" className="navbar-logo" />
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto custom-nav">
                        <Nav.Link href="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
                        <Nav.Link href="/about" onClick={() => setExpanded(false)}>About</Nav.Link>
                        <Nav.Link href="/gallery" onClick={() => setExpanded(false)}>Gallery</Nav.Link>
                        <Nav.Link href="/recommendations" onClick={() => setExpanded(false)}>Recommendations</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                        </Nav.Link>
                        <Nav.Link href={phoneLink}>
                            <FontAwesomeIcon icon={faPhone} size="lg" />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
