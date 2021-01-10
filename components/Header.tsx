import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import NavigationHamburger from "./NavigationHamburger";

const Header = styled.header`
  opacity: 0.97;
  z-index: 1;
  position: sticky;
  top: 0px;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  padding: 0 4vw;
  display: flex;
  height: 60px;
`;

const Title = styled.a`
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
`;

const DesktopMenu = styled.div`
  display: flex;
  align-items: center;
  a:not(:first-child) {
    margin-left: 30px;
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

const IconLink = styled.a`
  margin-left: 2vw;
`;

const NavItem = styled.a`
  cursor: pointer;
  :hover::after {
    background-color: #000;
  }
  ::after {
    content: "";
    display: block;
    width: 80%;
    height: 2px;
    position: relative;
    margin: 0px auto;
    top: 2px;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  overflow: hidden;
  height: ${({ open }) => (open ? "calc(100vh - 60px)" : "0")};
  text-align: center;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const MobileMenuLink = styled.a`
  cursor: pointer;
  padding: 3vw 5vw;
  font-size: 6.6vmin;
`;

const MobileActions = styled.div`
  padding: 3vw 5vw;
`;

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    // { href: "/contact", label: "Contact" },
  ];
  return (
    <Header>
      <NavBar>
        <Title>
          <Link href="/">
            <a>Jordan Wilson</a>
          </Link>
        </Title>
        <DesktopMenu>
          {links.map(({ href, label }) => (
            <Link key={label} href={href}>
              <NavItem>{label}</NavItem>
            </Link>
          ))}
          <IconLink
            href="https://www.linkedin.com/in/jordanfwilson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/linkedin.svg"
              width="20"
              height="20"
              alt="LinkedIn"
            />
          </IconLink>
          <IconLink
            href="https://github.com/JordanW7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/github.svg" width="20" height="20" alt="Github" />
          </IconLink>
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
          <Link key={`mobile-${label}`} href={href}>
            <MobileMenuLink>{label}</MobileMenuLink>
          </Link>
        ))}
        <MobileActions>
          <IconLink
            href="https://www.linkedin.com/in/jordanfwilson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/linkedin.svg"
              width="28"
              height="28"
              alt="LinkedIn"
            />
          </IconLink>
          <IconLink
            href="https://github.com/JordanW7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/github.svg" width="28" height="28" alt="Github" />
          </IconLink>
        </MobileActions>
      </MobileMenu>
    </Header>
  );
};

export default Navigation;
