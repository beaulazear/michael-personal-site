import React from 'react';
import styled from 'styled-components';
import AriaNewHome1 from '../images/AriaNewHome1.png';
import AriaNewHome2 from '../images/AriaNewHome2.png';
import AriaHome4 from '../images/AriaHome4.jpeg';
import BKTH2 from '../images/BKTH2.png'
import { Layout } from 'antd';

const { Footer } = Layout;

const ImageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const Image = styled.img`
    width: 259px; /* 2/3 of 389px */
    height: 257px; /* 2/3 of 386px */
    margin: 10px; /* Adjust spacing as needed */
    padding: 0;
    @media  (max-width: 600px) {
        margin: 0;
        padding: 5px 0;
        width: 100%;
        height: 100%
    }
`;

const footerStyle = {
    textAlign: 'center',
    position: 'fixed',
    width: '100%', // Make the footer 100% wide
    bottom: '0', // Set the bottom position to 0
    backgroundColor: '#001529', // Set the background color if needed
    color: '#fff', // Set the text color if needed
    padding: '10px', // Add padding if needed
};

const ImageGallery = () => {

    const images = [
        AriaHome4,
        AriaNewHome1,
        AriaNewHome2,
        BKTH2
    ];

    return (
        <>
            <div syle={{ marginBottom: '55px' }}>
                <ImageContainer>
                    {images.map((image, index) => (
                        <Image key={index} src={image} alt={`Image ${index + 1}`} />
                    ))}
                </ImageContainer>
            </div>
            <Footer style={footerStyle}>ARIA DESIGN CONSULTANTS © 2014</Footer>
        </>
    );
};

export default ImageGallery;
