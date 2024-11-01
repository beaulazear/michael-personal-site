// Contact.js
import React from "react";
import styled from "styled-components";
import { Card as AntCard } from "antd";
import AriaMichael from "../images/AriaMichael.png";
import Michael2 from "../images/Michael2.jpeg";

const PageContainer = styled.div`
    background-color: #f5f5f5;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;

    @media (max-width: 800px) {
        padding: 20px;
        padding-bottom: 45px;
    }
`;

const ContentContainer = styled.div`
    display: flex;
    gap: 20px;
    max-width: 1000px;
    width: 100%;
    align-items: stretch;
    background-color: #f5f5f5;
    border-radius: 10px;

    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        padding: 10px;
    }
`;

const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 50%; // Allows image to occupy half the space in larger screens

    @media (max-width: 800px) {
        order: -1;
        width: 100%;
        flex-basis: auto;
    }
`;

const Image = styled.img`
    width: 100%;
    max-width: 100%;
    height: 100%;  // Fills the container height
    border-radius: 10px;
    object-fit: cover;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);

    @media (max-width: 800px) {
        max-width: 300px;
        height: auto;
    }
`;

const StyledCard = styled(AntCard)`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    padding: 30px;
    text-align: center;
    flex-basis: 50%; // Allows card to occupy half the space in larger screens

    @media (max-width: 800px) {
        box-shadow: none;
        text-align: center;
        padding: 20px;
        flex-basis: auto;
    }
`;

const Title = styled.h2`
    font-size: 1.8em;
    color: #333;
    margin-bottom: 10px;
    font-family: 'Times, Times New Roman, serif';
    font-weight: 500;
    text-shadow: .5px 0 #888888;
    letter-spacing: 1px;
`;

const Paragraph = styled.p`
    font-size: 1.2em;
    color: #555;
    line-height: 1.6;
    text-align: left;
`;

const Logo = styled.img`
    width: 100%;
    max-width: 250px;
    margin-top: 20px;
`;

export default function Contact() {
    return (
        <PageContainer>
            <ContentContainer>
                <ImageContainer>
                    <Image src={Michael2} alt="Michael" />
                </ImageContainer>
                <StyledCard>
                    <Title>Michael S. Murray</Title>
                    <Paragraph>
                        Originally from Chicago, Michael's love of architecture was sparked by Louis Sullivan's work in and around the city. He combines his passions for architecture, construction, and design to transform residential properties in suburban Chicago, New York City, and the Hamptons into their highest potential while delivering exceptional value for clients.
                    </Paragraph>
                    <Logo src={AriaMichael} alt="brand with Michael's contact info" />
                </StyledCard>
            </ContentContainer>
        </PageContainer>
    );
}
