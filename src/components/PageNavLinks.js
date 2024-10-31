import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Aria_header from "../images/Aria_header.png";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  position: relative;
  background-color: #FFFFFF;
  width: 100%;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MenuIcon = styled(MenuOutlined)`
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  right: 20px;
`;

const HeaderTitle = styled.div`
  font-family: 'Times, Times New Roman, serif';
  font-size: 22px;
  margin-left: 10px;
`;

const LogoImage = styled.img`
  height: 33px;
  width: 102.9px;
`;

const StyledNavLink = styled(NavLink)`
  color: #333; /* Darker, sharper color */
  text-decoration: none;
  padding: 15px 0;
  font-size: 1.2em;
  font-weight: 600; /* Bold for a more professional look */
  text-transform: uppercase; /* Make text uppercase */
  letter-spacing: 1px; /* Add subtle letter spacing */
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #0073e6; /* Professional blue on hover */
  }

  &.active {
    color: #0073e6;
    border-bottom: 2px solid #0073e6; /* Underline active link */
  }
`;

const LinksContainer = styled.div`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  padding: 20px;
  border-top: 2px solid #ddd;
  transition: max-height 0.3s ease;
  max-height: ${({ visible }) => (visible ? "250px" : "0")};
  overflow: hidden;
`;


function PageNavLinks() {
    const [linksVisible, setLinksVisible] = useState(false);

    const toggleLinks = () => {
        setLinksVisible(!linksVisible);
    };

    const handleLinkClick = () => {
        setLinksVisible(false);
    };

    return (
        <>
            <HeaderContainer>
                <LogoContainer>
                    <LogoImage src={Aria_header} alt="Header Logo" />
                    <HeaderTitle>DESIGN CONSULTANTS</HeaderTitle>
                </LogoContainer>
                <MenuIcon onClick={toggleLinks} />
            </HeaderContainer>
            <LinksContainer visible={linksVisible}>
                <StyledNavLink to="/" exact onClick={handleLinkClick}>
                    Home
                </StyledNavLink>
                <StyledNavLink to="/projects" onClick={handleLinkClick}>
                    Projects
                </StyledNavLink>
                <StyledNavLink to="/contact" onClick={handleLinkClick}>
                    Contact
                </StyledNavLink>
            </LinksContainer>
        </>
    );
}

export default PageNavLinks;
