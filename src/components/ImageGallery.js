import React from 'react';
import styled from 'styled-components';
import AriaNewHome2 from '../images/AriaNewHome2.png';
import BKTH2 from '../images/BKTH2.png';
import TLANE3 from '../images/TLANE3.png';

const Container = styled.div`
  text-align: center;
  padding: 20px 20px 45px;
  background-color: #f9f9f9;
  height: 100%;
`;

const IntroText = styled.h1`
  font-size: 42px;
  font-weight: 100;
  color: #222;
  margin: 0 auto 40px;
  margin-top: 40px;
  max-width: 60%; /* Constrains width on larger screens */
  letter-spacing: 1.2px;
  text-transform: uppercase;
  font-family: 'Times, Times New Roman, serif';
  line-height: 1.2;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);

  @media (max-width: 1200px) {
    max-width: 70%; /* Slightly wider for medium-large screens */
    margin-top: 15px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    max-width: 80%; /* Wider for tablet screens */
    margin-bottom: 30px;
  }

  @media (max-width: 550px) {
    font-size: 26px;
    max-width: 90%; /* Full width for mobile */
    letter-spacing: 1px;
    margin-bottom: 20px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0;
  padding-bottom: 55px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 280px;
  height: auto;
  margin: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 550px) {
    max-width: 90%;
  }
`;

const ImageGallery = () => {
  const images = [BKTH2, AriaNewHome2, TLANE3];

  return (
    <Container>
      <IntroText>Transforming Spaces Into Refined Living Experiences</IntroText>
      <ImageContainer>
        {images.map((image, index) => (
          <Image key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </ImageContainer>
    </Container>
  );
};

export default ImageGallery;
