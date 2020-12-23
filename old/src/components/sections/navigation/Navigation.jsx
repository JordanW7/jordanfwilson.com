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
  background: rgba(0, 0, 0, 0.93);
  height: 44px;
`;

const Title = styled.a`
  font-size: 20px;
  font-weight: 500;
  margin-left: 30px;
  text-shadow: 0 0 5px #000;
  text-transform: uppercase;
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
  height: ${props => (props.open ? "230px" : "0")};
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
  const links = [
    { href: "#home", label: "Home" },
    { href: "#experience", label: "Experience" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#skills", label: "Skills" },
    { href: "#about", label: "About" }
  ];
  return (
    <Nav>
      <NavBar>
        <Title href="#home">Jordan Wilson</Title>
        <DesktopMenu>
          {links.map(({ href, label }) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </DesktopMenu>
        <MobileMenuToggle>
          <NavigationHamburger
            open={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </MobileMenuToggle>
      </NavBar>
      <MobileMenu open={menuOpen}>
        {links.map(({ href, label }) => (
          <a
            key={`mobile-${label}`}
            onClick={() => setMenuOpen(!menuOpen)}
            href={href}
          >
            {label}
          </a>
        ))}
      </MobileMenu>
    </Nav>
  );
};

export default Navigation;
