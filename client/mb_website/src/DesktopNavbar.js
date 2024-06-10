import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DesktopNavbar.css'; // Custom CSS for additional styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons'; // Import the phone icon
import logo from './logo.jpg'; // Adjust the path to your logo image

const DesktopNavbar = () => {

  const whatsappNumber = '+972548439982'; // Replace with the owner's phone number
  const phoneNumber = '+972515887084'; // Replace with the owner's phone number
  const message = 'Hello, I would like to contact you regarding your website.';
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  const phoneLink = `tel:${phoneNumber}`; // Link to open the phone app

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="desktop-navbar">
      <div className="left-links">
        <Nav.Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} size="lg" />
        </Nav.Link>
        <Nav.Link href={phoneLink}>
          <FontAwesomeIcon icon={faPhone} size="lg" />
        </Nav.Link>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav className="center-links">
          <Nav.Link href="/gallery">גלריה</Nav.Link>
          <Nav.Link href="/recommendations">המלצות</Nav.Link>
          <NavDropdown title="שיפוץ דירה" id="basic-nav-dropdown" className="custom-dropdown">
            <NavDropdown.Item href="#">מטבחים</NavDropdown.Item>
            <NavDropdown.Item href="#">חדרי אמבטיה</NavDropdown.Item>
            <NavDropdown.Item href="#">סלון</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/about">אודות</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand href="/" className="custom-brand">
          <img src={logo} alt="Logo" />
      </Navbar.Brand>
    </Navbar>
  );
};

export default DesktopNavbar;
