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
    padding: 20px;
`;

const ContentContainer = styled.div`
    display: flex;
    gap: 20px;
    max-width: 1200px;
    width: 100%;
    align-items: stretch;
    background-color: #f5f5f5;
    border-radius: 10px;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Image = styled.img`
    width: 100%;
    max-width: 400px;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
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

    @media (max-width: 800px) {
        box-shadow: none;
        text-align: left;
    }
`;

const Title = styled.h2`
    font-size: 1.8em;
    color: #333;
    margin-bottom: 10px;
`;

const Paragraph = styled.p`
    font-size: 1em;
    color: #555;
    line-height: 1.6;
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
