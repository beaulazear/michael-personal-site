import React from "react";
import Card from 'react-bootstrap/Card';
import Greenwhich_village from '../images/Greenwhich_village.jpeg';
import River_forest from '../images/River_forest.png';
import Southampton from '../images/Southampton.png';
import BKTH1 from '../images/BKTH1.png';
import BKTH3 from '../images/BKTH3.png';
import BKTH4 from '../images/BKTH4.png';
import TLANE1 from '../images/TLANE1.png';
import TLANE2 from '../images/TLANE2.png';
import TLANE3 from '../images/TLANE3.png';
import TLANE4 from '../images/TLANE4.png';
import TLANE5 from '../images/TLANE5.png';
import { Layout } from 'antd';

const { Footer } = Layout;

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Ensure the container takes the full height of the viewport
};

const headerStyle = {
    fontFamily: 'Times, Times New Roman, serif',
    fontSize: '36px',
    padding: '20px 0',
    textAlign: 'center',
    color: '#333',
    borderBottom: '2px solid #ccc',
    marginBottom: '20px',
};

const cardContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: '1', // Allow the card container to grow and take remaining space
    paddingBottom: '20px', // Add some space at the bottom
};

const cardStyle = {
    maxWidth: '750px',
    width: '100%',
    marginBottom: '45px',
};

const footerStyle = {
    textAlign: 'center',
    width: '100%',
    backgroundColor: '#001529',
    color: '#fff',
    padding: '10px',
    bottom: '0',
    position: 'fixed',
};

export default function Projects() {
    return (
        <div style={containerStyle}>
            <h1 style={headerStyle}>Recent Projects</h1>
            <div style={cardContainerStyle}>
                <Card style={cardStyle}>
                    <Card.Img variant="top" src={BKTH1} />
                    <Card.Img variant="top" src={BKTH4} />
                    <Card.Img variant="top" src={BKTH3} />
                    <Card.Body>
                        <Card.Title>Brooklyn Townhouse, Lincoln Place</Card.Title>
                        <Card.Text>
                            This was a gut renovation of the kitchen with cosmetic upgrades throughout the entire 4 floors. When first walking into the brownstone, Michael realized that one of the real features, the lush backyard, was hidden from view. He changed the layout of the kitchen and added a glass wall to allow a view and light to pour through. Cosmetic changes included staining the beams a darker color, refinishing the floors, paint, wallpaper and then a custom designed and built-in bookcase and stone around the fireplace.
                            <br /><br />
                            The downstairs bar area had everything it needed but felt like a new show home. The simple updates of painting, changing the hardware, adding an antique glass tile backsplash gave the space the bespoke bar area the homeowners dreamt of.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={cardStyle}>
                    <Card.Img variant="top" src={TLANE1} />
                    <Card.Img variant="top" src={TLANE2} />
                    <Card.Img variant="top" src={TLANE3} />
                    <Card.Img variant="top" src={TLANE4} />
                    <Card.Img variant="top" src={TLANE5} />
                    <Card.Body>
                        <Card.Title>Talmage Lane, Hamptons NY</Card.Title>
                        <Card.Text>
                            Michael purchased Talmage as a turn-around. Originally a Sears Kit House built on a hill. Michael reimagined this as a 3-story cottage with an addition and walk-out lower level. When Michael is not working for a specific client, he imagines the family that will live in the home. He builds the home and then waits for the family to find their new home. (Maybe not the smartest business plan.... but it works)
                            <br /><br />
                            This was sold turn-key with all furniture, linens, kitchen items etc. All of the furniture comes from the Rachael Ray Furniture Line, designed by Michael.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={cardStyle}>
                    <Card.Img variant="top" src={Southampton} />
                    <Card.Body>
                        <Card.Title>Southampton, NY</Card.Title>
                        <Card.Text>
                            Architectural transformation of a 3-bedroom ranch into a 5-bedroom residence with an office, separate garage, and new pool and spa on a private, estate-like property.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={cardStyle}>
                    <Card.Img variant="top" src={Greenwhich_village} />
                    <Card.Body>
                        <Card.Title>Greenwich Village, NYC</Card.Title>
                        <Card.Text>
                            Complete gut renovation and architectural re-imagining of a post-war, white glove co-op including new walls, floors, doors, ceilings, electrical, HVAC, plumbing, lighting, kitchen, bath, closets, and custom design of furnishings and art.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={cardStyle}>
                    <Card.Img variant="top" src={River_forest} />
                    <Card.Body>
                        <Card.Title>River Forest, NY</Card.Title>
                        <Card.Text>
                            Complete gut renovation and architectural re-imagining of a post-war, white glove co-op including new walls, floors, doors, ceilings, electrical, HVAC, plumbing, lighting, kitchen, bath, closets, and custom design of furnishings and art.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <Footer style={footerStyle}>ARIA DESIGN CONSULTANTS © 2014</Footer>
        </div>
    );
}
