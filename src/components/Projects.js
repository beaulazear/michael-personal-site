import React from "react";
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import BKTH1 from '../images/BKTH1.png';
import BKTH3 from '../images/BKTH3.png';
import BKTH4 from '../images/BKTH4.png';
import TLANE1 from '../images/TLANE1.png';
import TLANE2 from '../images/TLANE2.png';
import TLANE3 from '../images/TLANE3.png';
import TLANE4 from '../images/TLANE4.png';
import TLANE5 from '../images/TLANE5.png';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #f9f9f9;
    padding: 10px;
`;

const Header = styled.h1`
    font-family: 'Times, Times New Roman, serif';
    font-size: 32px;
    padding: 10px 0;
    text-align: center;
    color: #333;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
    letter-spacing: 1px;
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    padding-bottom: 20px;
`;

const StyledCard = styled(Card)`
    max-width: 900px;
    width: 100%;
    margin-bottom: 25px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    padding: 20px;
    border-radius: 8px;
    background: #fff;
`;

const CardTextContainer = styled.div`
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 10px;
    text-align: left;
    width: 100%;
`;

const CardTitle = styled.h2`
    font-size: 1.8em;
    margin-bottom: 10px;
    color: #333;
`;

const CardText = styled.p`
    font-size: 1em;
    color: #555;
    line-height: 1.4;
`;

const ImageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
    width: 100%;
`;

const CardImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`;

export default function Projects() {
    return (
        <Container>
            <Header>Recent Projects</Header>
            <CardContainer>
                <StyledCard>
                    <CardTextContainer>
                        <CardTitle>Brooklyn Townhouse, Lincoln Place</CardTitle>
                        <CardText>
                            A full kitchen renovation and updates across four floors. The layout was reimagined to showcase the backyard with a glass wall, while updates included darker beams, refinished floors, and a custom fireplace bookcase.
                            <br /><br />
                            The bar area was also refreshed with new paint, hardware, and an antique glass backsplash to add warmth and style.
                        </CardText>
                    </CardTextContainer>
                    <ImageContainer>
                        <CardImage src={BKTH1} />
                        <CardImage src={BKTH4} />
                        <CardImage src={BKTH3} />
                    </ImageContainer>
                </StyledCard>
                <StyledCard>
                    <CardTextContainer>
                        <CardTitle>Talmage Lane, Hamptons NY</CardTitle>
                        <CardText>
                            Originally a Sears Kit House, this project turned it into a 3-story cottage with modern updates and a walk-out lower level. Sold fully furnished, including items from the Rachael Ray Furniture Line.
                        </CardText>
                    </CardTextContainer>
                    <ImageContainer>
                        <CardImage src={TLANE1} />
                        <CardImage src={TLANE2} />
                        <CardImage src={TLANE3} />
                        <CardImage src={TLANE4} />
                        <CardImage src={TLANE5} />
                    </ImageContainer>
                </StyledCard>
            </CardContainer>
        </Container>
    );
}
