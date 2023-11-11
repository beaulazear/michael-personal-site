import React from "react";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import AriaMichael from "../images/AriaMichael.png"
import Michael2 from '../images/Michael2.jpeg'
import { Layout } from 'antd';

const { Footer } = Layout;

export default function Contact() {

    const headerStyle = {
        fontFamily: 'Times, Times New Roman, serif',
        fontSize: '24px',
        textAlign: 'center'
    }

    const imageStyle = {
        width: '372.48x',
        height: '216px',
        marginBottom: '40px'
    }

    const footerStyle = {
        textAlign: 'center',
        width: '100%', // Make the footer 100% wide
        position: 'fixed', // Stick the footer to the bottom
        bottom: '0', // Set the bottom position to 0
        backgroundColor: '#001529', // Set the background color if needed
        color: '#fff', // Set the text color if needed
        padding: '10px', // Add padding if needed
    };

    const cardStyle = {
        maxWidth: '500px', // You can adjust the max width as needed
        margin: 'auto', // Center the cards
        padding: '10px',
        fontFamily: 'Times, Times New Roman, serif',
        border: '0px'
    };

    return (
        <div style={{ textAlign: 'center', margin: 'auto' }}>
            <Card style={cardStyle}>
                <Image src={Michael2} roundedCircle />
                <Card.Body>
                    <Card.Title>Michael S. Murray</Card.Title>
                    <Card.Text>
                        Originally from Chicago, Michael's love of architecture was sparked by Louis Sullivan's work in and around the city. He combines his passions for architecture, construction and design to transform residential properties in suburban Chicago, New York City and the Hamptons into their highest potential, while delivering exceptional value for clients.
                    </Card.Text>
                </Card.Body>
            </Card>
            <img alt="brand with michaels contact info" style={imageStyle} src={AriaMichael} />
            <Footer style={footerStyle}>ARIA DESIGN CONSULTANTS © 2014</Footer>
        </div>
    )
}