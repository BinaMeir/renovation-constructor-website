import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const NavigationBar = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded}>
            <Container>
                <Navbar.Brand href="#">Brand</Navbar.Brand>
                <Navbar.Toggle 
                    aria-controls="basic-navbar-nav" 
                    onClick={() => setExpanded(expanded ? false : "expanded")}
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
                        <Nav.Link href="/about" onClick={() => setExpanded(false)}>About</Nav.Link>
                        <Nav.Link href="/gallery" onClick={() => setExpanded(false)}>gallery</Nav.Link>
                        <Nav.Link href="/recommendations" onClick={() => setExpanded(false)}>recommendations</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
