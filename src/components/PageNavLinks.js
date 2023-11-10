import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Aria_header from '../images/Aria_header.png'

const headerStyle = {
    fontFamily: 'Times, Times New Roman, serif',
    fontSize: '22px',
}

const imageHeaderStyle = {
    height: '33px',
    width: '102.9px'
}

const StyledNavLink = styled(NavLink)`
  color: #3498db; /* Set the text color to a stylish blue */
  text-decoration: none; /* Remove the default underline */
  transition: color 0.3s ease-in-out; /* Add a smooth color transition on hover */
  padding: 10px;
  &:hover {
    color: #2c3e50; /* Change the text color on hover */
  }

  &.active {
    font-weight: bold; /* Style for the active link, e.g., bold font */
  }
`;

function PageNavLinks() {
    const [expanded, setExpanded] = useState(false);

    const handleNavCollapse = () => {
        setExpanded(false);
    };

    return (
        <Navbar expand="lg" className="bg-body" expanded={expanded}>
            <Container className="flex-row">
                <Navbar.Brand style={headerStyle} as={NavLink} to="/" onClick={handleNavCollapse}>
                    <img style={imageHeaderStyle} src={Aria_header} /> DESIGN CONSULTANTS
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={() => setExpanded(!expanded)}
                />
                <Navbar.Collapse id="basic-navbar-nav" onSelect={handleNavCollapse}>
                    <Nav className="flex-row">
                        <StyledNavLink onClick={() => setExpanded(!expanded)} to="/" exact>
                            Home
                        </StyledNavLink>
                        <StyledNavLink onClick={() => setExpanded(!expanded)} to="/projects">
                            Projects
                        </StyledNavLink>
                        <StyledNavLink onClick={() => setExpanded(!expanded)} to="/contact">
                            Contact
                        </StyledNavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default PageNavLinks;
