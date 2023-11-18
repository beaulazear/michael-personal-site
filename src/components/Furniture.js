import React from "react";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import michaelandrachael from "../images/michaelandrachael.png"
import { Layout } from 'antd';

const { Footer } = Layout;

export default function Contact() {

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
        border: '0px',
        marginBottom: '45px'
    };

    return (
        <div style={{ textAlign: 'center', margin: 'auto' }}>
            <Card style={cardStyle}>
                <Image src={michaelandrachael} rounded />
                <Card.Body>
                    <Card.Title>Rachael Ray Home</Card.Title>
                    <Card.Text style={{ textAlign: 'left' }}>
                        Michael Murray is Rachael Ray's Design Partner and General Manager of Rachael Ray Home                    </Card.Text>
                </Card.Body>
            </Card>
            <Footer style={footerStyle}>ARIA DESIGN CONSULTANTS © 2014</Footer>
        </div>
    )
}