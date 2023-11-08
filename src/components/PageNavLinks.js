import React from "react";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const breadCrumbs = [{ title: <NavLink to="Home">Home</NavLink> }, { title: <NavLink to="Projects" /> }, { title: <NavLink to="Contact" /> }]

export default function PageNavLinks() {
    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <NavLink to="#home">Brand link</NavLink>
                    |
                    <NavLink to="#home">Brand link</NavLink>
                    |
                    <NavLink to="#home">Brand link</NavLink>
                </Container>
            </Navbar>
        </>
    )
}