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
        flex-direction: column;
        align-items: center;
        padding: 20px;
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

    @media (max-width: 650px) {
        padding: 15px;
        border: none;
        box-shadow: none;
        margin: 0;
        align-items: flex-start;
    }
`;

const StyledImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    @media (max-width: 650px) {
        width: 100%;
        border-radius: 5px;
        box-shadow: none;
        margin-bottom: 15px;
    }
`;

const StyledCard = styled(Card)`
    max-width: 500px;
    margin: auto;
    padding: 20px;
    font-family: 'Times, Times New Roman, serif';
    border: 0;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    @media (max-width: 650px) {
        box-shadow: none;
        border: none;
        padding: 0;
        max-width: 100%;
        text-align: left;
    }
`;

const StyledTextContainer = styled.div`
    @media (max-width: 650px) {
        font-family: 'Times, Times New Roman, serif';
        padding: 15px;
        line-height: 1.6;
        color: #333;
    }
`;

const StyledTitle = styled.h2`
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 1.5em;
    color: #333;

    @media (max-width: 650px) {
        font-size: 1.8em;
        text-align: left;
        margin-bottom: 15px;
    }
`;

const StyledParagraph = styled.p`
    font-size: 1em;
    margin-bottom: 15px;
    color: #555;

    @media (max-width: 650px) {
        font-size: 1.1em;
        margin-bottom: 20px;
    }
`;

const StyledLogo = styled.img`
    width: 100%;
    max-width: 300px;
    height: auto;
    margin-bottom: 20px;

    @media (max-width: 650px) {
        margin-top: 10px;
        max-width: 250px;
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
                            <StyledTextContainer>
                                <StyledTitle>Michael S. Murray</StyledTitle>
                                <StyledParagraph>
                                    Originally from Chicago, Michael's love of architecture was sparked by Louis Sullivan's work in and around the city. He combines his passions for architecture, construction, and design to transform residential properties in suburban Chicago, New York City, and the Hamptons into their highest potential while delivering exceptional value for clients.
                                </StyledParagraph>
                                <StyledLogo alt="brand with Michael's contact info" src={AriaMichael} />
                            </StyledTextContainer>
                        </Card.Body>
                    </StyledCard>
                </StyledColumn>
            </StyledContainer>
            <StyledFooter>ARIA DESIGN CONSULTANTS © 2014</StyledFooter>
        </div>
    );
}
