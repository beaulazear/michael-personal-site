import React from "react";
import styled from "styled-components";
import AriaNewHome1 from '../images/AriaNewHome1.png';
import AriaNewHome2 from '../images/AriaNewHome2.png';
import AriaHome4 from '../images/AriaHome4.jpeg';
import BKTH2 from '../images/BKTH2.png'
import Michael from '../images/Michael.png';
import Carousel from 'react-bootstrap/Carousel';
import { Layout } from 'antd';

const { Footer } = Layout;

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
    maxHeight: '316px',
    margin: '10px', // Remove any margin
    padding: '0', // Remove any padding
};

const imageStyle = {
    width: '389ppx',
    height: '386px',
    marginRight: '20px',
    marginBottom: '40px',
}

const StyledFooter = styled(Footer)`
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: #001529;
  color: #fff;
  padding: 10px;
`;

const Home = () => (
    <div>
        <div style={containerStyle}>
            <Carousel interval={5000} pause={false}>
                <Carousel.Item>
                    <img style={contentStyle} src={AriaNewHome1} alt="Slide 1" />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={contentStyle} src={AriaNewHome2} alt="Slide 2" />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={contentStyle} src={BKTH2} alt="Slide 3" />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={contentStyle} src={AriaHome4} alt="Slide 4" />
                </Carousel.Item>
            </Carousel>
        </div>
        <div style={{textAlign: 'center'}}>
            <img style={imageStyle} src={Michael} />
        </div>
        <StyledFooter>ARIA DESIGN CONSULTANTS © 2014</StyledFooter>
    </div>
);

export default Home;
