import React from "react";
import AriaHome1 from '../images/AriaHome1.jpeg';
import AriaHome2 from '../images/AriaHome2.jpeg';
import AriaHome3 from '../images/AriaHome3.jpeg';
import AriaHome4 from '../images/AriaHome4.jpeg';
import Carousel from 'react-bootstrap/Carousel';

const contentStyle = {
    height: '316px',
    width: '337px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const containerStyle = {
    
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', // Ensure the container takes at least the full height of the viewport
    margin: '0', // Remove any margin
    padding: '0', // Remove any padding
};

const Home = () => (
    <div style={containerStyle}>
        <Carousel interval={5000} pause={false}>
            <Carousel.Item>
                <img style={contentStyle} src={AriaHome1} alt="Slide 1" />
            </Carousel.Item>
            <Carousel.Item>
                <img style={contentStyle} src={AriaHome2} alt="Slide 2" />
            </Carousel.Item>
            <Carousel.Item>
                <img style={contentStyle} src={AriaHome3} alt="Slide 3" />
            </Carousel.Item>
            <Carousel.Item>
                <img style={contentStyle} src={AriaHome4} alt="Slide 4" />
            </Carousel.Item>
        </Carousel>
    </div>
);

export default Home;
