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
  color: #696969; /* Set the text color to a stylish blue */
  text-decoration: none; /* Remove the default underline */
  transition: color 0.3s ease-in-out; /* Add a smooth color transition on hover */
  padding: 10px;
  &:hover {
    color: #181818; /* Change the text color on hover */
  }

  &.active {
    color: #181818;
    font-weight: bold; /* Style for the active link, e.g., bold font */
  }
`;

function PageNavLinks() {

    return (
        <Navbar expand="lg" className="bg-body">
            <Container className="flex-row">
                <Navbar.Brand style={headerStyle} as={NavLink} to="/">
                    <img style={imageHeaderStyle} src={Aria_header} /> DESIGN CONSULTANTS
                </Navbar.Brand>
                <Nav className="flex-row">
                    <StyledNavLink to="/" exact>
                        Home
                    </StyledNavLink>
                    <StyledNavLink to="/projects">
                        Projects
                    </StyledNavLink>
                    <StyledNavLink to="/contact">
                        Contact
                    </StyledNavLink>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default PageNavLinks;
