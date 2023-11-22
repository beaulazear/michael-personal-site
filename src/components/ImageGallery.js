import React from 'react';
import styled from 'styled-components';
import AriaNewHome1 from '../images/AriaNewHome1.png';
import AriaNewHome2 from '../images/AriaNewHome2.png';
import BKTH2 from '../images/BKTH2.png'
import Aria_header from '../images/Aria_header.png'
import { Layout } from 'antd';

const { Footer } = Layout;

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const WelcomeCard = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #e8e8e8; /* Subtle border */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  margin-bottom: 35px
`;

const WelcomeMessage = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #555;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Image = styled.img`
  width: 259px;
  height: 257px;
  margin: 10px;
  @media (max-width: 550px) {
    margin: 0;
    padding: 5px 0;
    width: 100%;
    height: 100%;
  }
`;

const StyledFooter = styled(Footer)`
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: #001529;
  color: #fff;
  padding: 10px;
`;

const StyledLogo = styled.img`
  width: 150px;
  height: 100%;
  padding-bottom: 10px
`

const ImageGallery = () => {
    const images = [
        BKTH2,
        AriaNewHome2,
        AriaNewHome1,
    ];

    return (
        <>
            <Container>
                <WelcomeCard>
                    <WelcomeMessage>
                        <StyledLogo src={Aria_header} alt="Aria logo" />
                        <br/>
                        Creating Timeless Elegance in Home Design and Interiors.
                        We specialize in luxury properties in New York and the Hamptons, transforming spaces into refined living experiences.
                    </WelcomeMessage>
                </WelcomeCard>
                <ImageContainer>
                    {images.map((image, index) => (
                        <Image key={index} src={image} alt={`Image ${index + 1}`} />
                    ))}
                </ImageContainer>
            </Container>
            <StyledFooter>ARIA DESIGN CONSULTANTS © 2014</StyledFooter>
        </>
    );
};

export default ImageGallery;
