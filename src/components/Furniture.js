import michaelandrachael from "../images/michaelandrachael.png"
import React from "react";
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { Layout } from 'antd';

const { Footer } = Layout;

export default function Furniture() {

    const StyledFooter = styled(Footer)`
    text-align: center;
    position: fixed;
    width: 100%;
    bottom: 0;
    background-color: #001529;
    color: #fff;
    padding: 10px;
  `;

    const StyledCard = styled(Card)`
    max-width: 500px;
    margin: auto;
    padding: 10px;
    font-family: 'Times, Times New Roman, serif';
    border: 0px;
    padding-bottom: 45px;
  `;

    return (
        <div style={{ textAlign: 'center' }}>
            <StyledCard>
                <Image src={michaelandrachael} rounded />
                <Card.Body>
                    <Card.Title>Rachael Ray Home</Card.Title>
                    <Card.Text style={{ textAlign: 'left' }}>
                        Michael Murray is Rachael Ray's Design Partner and General Manager of Rachael Ray Home                    </Card.Text>
                </Card.Body>
            </StyledCard>
            <StyledFooter>ARIA DESIGN CONSULTANTS © 2014</StyledFooter>
        </div>
    )
}