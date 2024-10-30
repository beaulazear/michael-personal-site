import React from 'react';
import styled from 'styled-components';
import AriaNewHome1 from '../images/AriaNewHome1.png';
import AriaNewHome2 from '../images/AriaNewHome2.png';
import BKTH2 from '../images/BKTH2.png';
import { Layout } from 'antd';

const { Footer } = Layout;

const Container = styled.div`
  text-align: center;
  padding: 20px;
  padding-bottom: 45px;
  background-color: #f9f9f9; /* Light background for contrast */
`;

const WelcomeCard = styled.div`
  max-width: 800px; /* Increased max-width for larger screens */
  margin: 0 auto;
  padding: 30px; /* Increased padding for a more spacious feel */
  border: 1px solid #e0e0e0; /* Softer border color */
  border-radius: 12px; /* Slightly more rounded corners */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); /* More pronounced shadow */
  background-color: #fff; /* White background for card */
  margin-bottom: 40px; /* Increased margin below the card */
  transition: transform 0.2s; /* Transition for hover effect */

  &:hover {
    transform: translateY(-5px); /* Slight lift on hover */
  }
`;

const WelcomeMessage = styled.p`
  font-size: 18px; /* Larger font size */
  line-height: 1.6; /* Increased line height for better readability */
  color: #333; /* Darker text for better contrast */
  margin: 0; /* Remove default margin */
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center images in the container */
  margin: 20px 0; /* Added margin above and below the image container */
`;

const Image = styled.img`
  width: 100%; /* Full width for responsiveness */
  max-width: 280px; /* Limit max width for larger screens */
  height: auto; /* Maintain aspect ratio */
  margin: 15px; /* More breathing room between images */
  border-radius: 8px; /* Rounded corners for images */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Soft shadow for images */

  @media (max-width: 550px) {
    max-width: 90%; /* Responsive max width for small screens */
  }
`;

const StyledFooter = styled(Footer)`
  text-align: center;
  position: fixed; /* Fixes the footer to the bottom of the screen */
  left: 0; /* Aligns footer to the left edge */
  bottom: 0; /* Sticks footer to the bottom */
  width: 100%; /* Makes the footer span the full width */
  background-color: #001529; /* Footer background color */
  color: #fff; /* Footer text color */
  padding: 15px; /* Increased padding for footer */
`;

const ImageGallery = () => {
  const images = [BKTH2, AriaNewHome2, AriaNewHome1];

  return (
    <>
      <Container>
        <WelcomeCard>
          <WelcomeMessage>
            Creating Timeless Elegance in Home Design and Interiors. We specialize in luxury properties in New York and the Hamptons, transforming spaces into refined living experiences.
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
