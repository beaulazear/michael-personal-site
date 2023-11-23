import React from "react";
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import AriaMichael from "../images/AriaMichael.png";
import Michael2 from '../images/Michael2.jpeg';
import { Layout } from 'antd';

const { Footer } = Layout;

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    padding-bottom: 45px;
    max-width: 1000px;
    margin: auto;
    @media (max-width: 650px) {
        display: flex;
        flex-direction: column;
        align-items: normal;
        max-width: 400px;
    }
`;

const StyledColumn = styled.div`
    flex: 1;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s ease-in-out;
    width: 100%;

    @media (min-width: 650px) {
        margin: 15px;
        &:hover {
            transform: scale(1.05);
        }
    }

`;

const StyledImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledCard = styled(Card)`
    max-width: 500px;
    margin: auto;
    padding: 20px;
    font-family: 'Times, Times New Roman, serif';
    border: 0;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledLogo = styled.img`
    width: 100%;
    max-width: 372.48px;
    height: auto;
    margin-bottom: 20px;
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

export default function Contact() {
    return (
        <div>
            <StyledContainer>
                <StyledColumn>
                    <StyledImage src={Michael2} alt="Michael" />
                </StyledColumn>
                <StyledColumn>
                    <StyledCard>
                        <Card.Body>
                            <Card.Title>Michael S. Murray</Card.Title>
                            <Card.Text style={{ textAlign: 'left', paddingBottom: '20px' }}>
                                Originally from Chicago, Michael's love of architecture was sparked by Louis Sullivan's work in and around the city. He combines his passions for architecture, construction, and design to transform residential properties in suburban Chicago, New York City, and the Hamptons into their highest potential while delivering exceptional value for clients.
                            </Card.Text>
                            <StyledLogo alt="brand with Michael's contact info" src={AriaMichael} />
                        </Card.Body>
                    </StyledCard>
                </StyledColumn>
            </StyledContainer>
            <StyledFooter>ARIA DESIGN CONSULTANTS © 2014</StyledFooter>
        </div>
    );
}
