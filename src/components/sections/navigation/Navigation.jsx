import React, { useState } from "react";
import styled from "styled-components";
import NavigationHamburger from "./NavigationHamburger";

const Nav = styled.nav`
  z-index: 1;
  position: fixed;
  width: 100%;
  color: #fff;
`;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.9);
  height: 44px;
`;

const Title = styled.a`
  font-size: 20px;
  font-weight: 500;
  margin-left: 30px;
  text-shadow: 0 0 5px #000;
`;

const DesktopMenu = styled.div`
  a {
    margin-right: 30px;
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

const MobileMenuToggle = styled.div`
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: rgb(30, 30, 30);
  overflow: hidden;
  height: ${props => (props.open ? "200px" : "0")};
  transition: height 0.3s ease-out;
  text-align: left;
  a {
    padding: 12px 20px;
    font-size: 12pt;
    text-transform: uppercase;
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuFold = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <Nav>
      <NavBar>
        <Title href="#home">JORDAN WILSON</Title>
        <DesktopMenu>
          <a href="#home">Home</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
        </DesktopMenu>
        <MobileMenuToggle>
          <NavigationHamburger open={menuOpen} onClick={handleMenuFold} />
        </MobileMenuToggle>
      </NavBar>
      <MobileMenu open={menuOpen}>
        <a onClick={handleMenuFold} href="#home">
          Home
        </a>
        <a onClick={handleMenuFold} href="#portfolio">
          Portfolio
        </a>
        <a onClick={handleMenuFold} href="#skills">
          Skills
        </a>
        <a onClick={handleMenuFold} href="#about">
          About
        </a>
      </MobileMenu>
    </Nav>
  );
};

export default Navigation;
