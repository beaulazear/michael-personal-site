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
  font-size: 32px;
  font-weight: 100;
  color: #222;
  margin: 0 auto 30px;
  margin-top: 40px;
  max-width: 60%; /* Constrains width on larger screens */
  letter-spacing: 1.2px;
  text-transform: uppercase;
  font-family: 'Times, Times New Roman, serif';
  line-height: 1.2;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);

  @media (max-width: 1200px) {
    max-width: 70%; /* Slightly wider for medium-large screens */
    margin-top: 20px;
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
    font-weight: 300;
    margin-bottom: 10px;
    color: #333;
    font-family: 'Times, Times New Roman, serif';
`;

const CardText = styled.p`
    font-size: 1.2em;
    color: #555;
    line-height: 1.4;
    font-family: 'Times, Times New Roman, serif';
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
                            This was a gut renovation of the kitchen with cosmetic upgrades throughout the entire 4 floors.
                            When first walking into the brownstone, Michael realized that one of the real features, the lush
                            backyard, was hidden from view. He changed the layout of the kitchen and added a glass wall to allow
                            a view and light to pour through. Cosmetic changes included staining the beams a darker color,
                            refinishing the floors, paint, wallpaper, and then a custom-designed and built-in bookcase and stone
                            around the fireplace.
                            <br /><br />
                            The downstairs bar area had everything it needed but felt like a new show home. The simple updates
                            of painting, changing the hardware, adding an antique glass tile backsplash gave the space the bespoke
                            bar area the homeowners dreamt of.
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
                            Michael purchased Talmage as a turn-around. Originally a Sears Kit House built on a hill, Michael
                            reimagined this as a 3-story cottage with an addition and walk-out lower level. When Michael is not
                            working for a specific client, he imagines the family that will live in the home. He builds the home
                            and then waits for the family to find their new home. (Maybe not the smartest business plan... but it works)
                            <br /><br />
                            This was sold turn-key with all furniture, linens, kitchen items, etc. All of the furniture comes
                            from the Rachael Ray Furniture Line, designed by Michael.
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
