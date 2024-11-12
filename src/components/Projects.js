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
import CH3 from '../images/CHI3.jpg';
import CH4 from '../images/CHI4.jpg';
import CH5 from '../images/CHI5.jpg';
import CH6 from '../images/CHI6.jpg';
import CH7 from '../images/CHI7.jpg';
import CH8 from '../images/CHI8.jpg';
import CH9 from '../images/CHI9.jpg';
import CH10 from '../images/CHI10.jpg';
import CH11 from '../images/CHI11.jpg';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #f9f9f9;
    padding: 10px;
`;

const Header = styled.h1`
  font-size: 36px;
  font-weight: 300;
  color: #333;
  margin: 0 auto 30px;
  margin-top: 40px;
  margin-bottom: 40px;
  max-width: 60%;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  font-family: 'Times, Times New Roman, serif';
  line-height: 1.2;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: 1200px) {
    max-width: 70%;
    margin-top: 25px;
    margin-bottom: 25px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    max-width: 80%;
  }

  @media (max-width: 550px) {
    font-size: 26px;
    max-width: 90%;
    letter-spacing: 1px;
  }
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    padding-bottom: 30px;
`;

const StyledCard = styled(Card)`
    max-width: 900px;
    width: 100%;
    margin-bottom: 25px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease;
`;

const CardTextContainer = styled.div`
    padding: 15px;
    text-align: center;
    font-family: 'Times, Times New Roman, serif';
    background-color: #fff;
`;

const CardTitle = styled.h2`
    font-size: 1.6em;
    font-weight: 400;
    color: #333;
`;

const CardBrief = styled.p`
    font-size: 1em;
    color: #555;
`;

const ExpandedDescription = styled.div`
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, padding 0.3s ease;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 0 15px;

    ${StyledCard}:hover & {
        max-height: 600px; /* Large enough to fit all content */
        padding: 15px;
    }
`;

const ImageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
    width: 100%;
    margin-top: 20px;
`;

const CardImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    }
`;

export default function Projects() {
    return (
        <Container>
            <Header>Recent Projects</Header>
            <CardContainer>
                <StyledCard>
                    <CardTextContainer>
                        <CardTitle>Lakefront Condo, Chicago</CardTitle>
                        <CardBrief>Michael brings a sophisticated balance of modern luxury and warm elegance to this Chicago condo.</CardBrief>
                    </CardTextContainer>
                    <ExpandedDescription>
                        In this thoughtfully redesigned condo, Michael brings a sophisticated balance of modern luxury and warm elegance.
                        Recognizing the potential for maximizing natural light and creating a seamless flow throughout the space,
                        he has transformed each room with a refined palette and carefully curated decor.
                        <br /><br />
                        The living room features large mirrors that add depth and openness, plush seating in soft, neutral tones, and carefully curated greenery.
                        In the kitchen, Michael opted for a bold red accent on the ceiling, sleek cabinetry, and open shelving that showcases artisanal decor.
                        The bathroom is a calming retreat with classic white tile, dark trim, and organic elements, while the bedroom offers a serene sanctuary with
                        natural wood textures and soft textiles.
                    </ExpandedDescription>
                    <ImageContainer>
                        <CardImage src={CH3} />
                        <CardImage src={CH4} />
                        <CardImage src={CH5} />
                        <CardImage src={CH6} />
                        <CardImage src={CH7} />
                        <CardImage src={CH8} />
                        <CardImage src={CH9} />
                        <CardImage src={CH10} />
                        <CardImage src={CH11} />
                    </ImageContainer>
                </StyledCard>
                <StyledCard>
                    <CardTextContainer>
                        <CardTitle>Brooklyn Townhouse, Lincoln Place</CardTitle>
                        <CardBrief>This townhouse renovation highlights natural light and showcases beautiful custom features.</CardBrief>
                    </CardTextContainer>
                    <ExpandedDescription>
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
                    </ExpandedDescription>
                    <ImageContainer>
                        <CardImage src={BKTH1} />
                        <CardImage src={BKTH4} />
                        <CardImage src={BKTH3} />
                    </ImageContainer>
                </StyledCard>
                <StyledCard>
                    <CardTextContainer>
                        <CardTitle>Talmage Lane, Hamptons NY</CardTitle>
                        <CardBrief>This project involved reimagining a Sears Kit House into a 3-story cottage with a walk-out lower level.</CardBrief>
                    </CardTextContainer>
                    <ExpandedDescription>
                        Michael purchased Talmage as a turn-around. Originally a Sears Kit House built on a hill, Michael
                        reimagined this as a 3-story cottage with an addition and walk-out lower level. When Michael is not
                        working for a specific client, he imagines the family that will live in the home. He builds the home
                        and then waits for the family to find their new home. (Maybe not the smartest business plan... but it works)
                        <br /><br />
                        This was sold turn-key with all furniture, linens, kitchen items, etc. All of the furniture comes
                        from the Rachael Ray Furniture Line, designed by Michael.
                    </ExpandedDescription>
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