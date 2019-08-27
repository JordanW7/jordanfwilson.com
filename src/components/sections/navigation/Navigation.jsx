import React, { useState } from "react";
import "../../../Navigation.css";
import NavigationHamburger from "./NavigationHamburger";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuFold = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav>
      <div className="navbar">
        <a className="nav-title" href="#home">
          JORDAN WILSON
        </a>
        <div className="desktop-menu">
          <a className="nav-item" href="#home">
            Home
          </a>
          <a className="nav-item" href="#portfolio">
            Portfolio
          </a>
          <a className="nav-item" href="#skills">
            Skills
          </a>
          <a className="nav-item" href="#about">
            About
          </a>
        </div>
        <div className="mobile-menu-toggle">
          <NavigationHamburger onClick={handleMenuFold} />
        </div>
      </div>
      <div
        className={menuOpen ? "mobile-menu mobile-menu-visible" : "mobile-menu"}
      >
        <a className="mobile-menu-link" onClick={handleMenuFold} href="#home">
          Home
        </a>
        <a
          className="mobile-menu-link"
          onClick={handleMenuFold}
          href="#portfolio"
        >
          Portfolio
        </a>
        <a className="mobile-menu-link" onClick={handleMenuFold} href="#skills">
          Skills
        </a>
        <a className="mobile-menu-link" onClick={handleMenuFold} href="#about">
          About
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
