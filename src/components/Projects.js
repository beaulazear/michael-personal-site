import React from "react";
import Card from 'react-bootstrap/Card';
import Greenwhich_village from '../images/Greenwhich_village.jpeg';
import River_forest from '../images/River_forest.png';
import Southampton from '../images/Southampton.png';
import { Layout } from 'antd';

const { Footer } = Layout;

const headerStyle = {
    fontFamily: 'Times, Times New Roman, serif',
    fontSize: '24px',
    padding: '10px',
    textAlign: 'center',
};

const cardContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

const cardStyle = {
    maxWidth: '800px',
    width: '100%', // Ensure the card takes full width
    marginBottom: '20px', // Add some space between cards
};

const footerStyle = {
    textAlign: 'center',
    width: '100%', // Make the footer 100% wide
    position: 'fixed', // Stick the footer to the bottom
    bottom: '0', // Set the bottom position to 0
    backgroundColor: '#001529', // Set the background color if needed
    color: '#fff', // Set the text color if needed
    padding: '10px', // Add padding if needed
};

export default function Projects() {
    return (
        <div style={cardContainerStyle}>
            <h1 style={headerStyle}>Recent Projects</h1>
            <Card style={cardStyle}>
                <Card.Img variant="top" src={Southampton} />
                <Card.Body>
                    <Card.Title>Southampton, NY</Card.Title>
                    <Card.Text>Architectural transformation of a 3-bedroom ranch into a 5-bedroom residence with an office, separate garage and new pool and spa on a private, estate-like property.</Card.Text>
                </Card.Body>
            </Card>
            <Card style={cardStyle}>
                <Card.Img variant="top" src={Greenwhich_village} />
                <Card.Body>
                    <Card.Title>Greenwich Village, NYC</Card.Title>
                    <Card.Text>Complete gut renovation and architectural re-imagining of a post-war, white glove co-op including new walls, floors, doors, ceilings, electrical, HVAC, plumbing, lighting, kitchen, bath, closets and custom design of furnishings and art.</Card.Text>
                </Card.Body>
            </Card>
            <Card style={cardStyle}>
                <Card.Img variant="top" src={River_forest} />
                <Card.Body>
                    <Card.Title>River Forest, NY</Card.Title>
                    <Card.Text>Complete gut renovation and architectural re-imagining of a post-war, white glove co-op including new walls, floors, doors, ceilings, electrical, HVAC, plumbing, lighting, kitchen, bath, closets and custom design of furnishings and art.</Card.Text>
                </Card.Body>
            </Card>
            <Footer style={footerStyle}>ARIA DESIGN CONSULTANTS © 2014</Footer>
        </div>
    );
}