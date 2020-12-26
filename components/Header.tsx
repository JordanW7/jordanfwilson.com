import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import NavigationHamburger from "./NavigationHamburger";

const Header = styled.header`
  z-index: 1;
  position: sticky;
  top: 0px;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  /* color: #fff; */
`;

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  /* background: rgba(0, 0, 0, 0.93); */
  height: 44px;
`;

const Title = styled.a`
  font-size: 20px;
  font-weight: 500;
  margin-left: 30px;
  /* text-shadow: 0 0 5px #000; */
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
  height: ${(props) => (props.open ? "230px" : "0")};
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
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
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
              <a>{label}</a>
            </Link>
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
          <Link key={`mobile-${label}`} href={href}>
            <a onClick={() => setMenuOpen(!menuOpen)}>{label}</a>
          </Link>
        ))}
      </MobileMenu>
    </Header>
  );
};

export default Navigation;
