import React from 'react';
import styled from 'styled-components';
import LakeShore from '../images/LakeShore.jpg';
import BKTH1 from '../images/BKTH1.png';
import BKTH3 from '../images/BKTH3.png';

const Container = styled.div`
  text-align: center;
  padding: 20px 20px 45px;
  background-color: #f9f9f9;
  height: 100%;
`;

const IntroText = styled.h1`
  font-size: 40px;
  color: #222;
  margin: 0 auto 40px;
  margin-top: 40px;
  max-width: 60%;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  font-family: 'Times, Times New Roman, serif';
  line-height: 1.2;
  text-shadow: 1px 1px 1.5px rgba(0, 0, 0, 0.15);

  @media (max-width: 1200px) {
    max-width: 70%;
    margin-top: 15px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    max-width: 80%;
    margin-bottom: 30px;
  }

  @media (max-width: 550px) {
    font-size: 26px;
    max-width: 90%;
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
  max-width: 300px; /* Slightly smaller on default screens */
  height: auto;
  margin: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ImageGallery = () => {
  const images = [BKTH1, LakeShore, BKTH3];

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