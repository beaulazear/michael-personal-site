// FooterComponent.js
import React from "react";
import styled from "styled-components";
import { Layout } from "antd";

const { Footer } = Layout;

const FooterStyled = styled(Footer)`
    text-align: center;
    width: 100%;
    background-color: #001529;
    color: #fff;
    padding: 15px;
    margin-top: auto;
    position: fixed;
    bottom: 0;
`;

export default function FooterComponent() {
    return <FooterStyled>ARIA DESIGN CONSULTANTS © 2014</FooterStyled>;
}
