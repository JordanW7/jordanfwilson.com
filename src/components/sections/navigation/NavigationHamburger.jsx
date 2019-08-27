import React, { Fragment, useState } from "react";
import styled from "styled-components";

const MenuIcon = styled.label`
  cursor: pointer;
  float: right;
  padding: 28px 20px;
  position: relative;
  user-select: none;
`;

const NavIcon = styled.span`
  background: ${props => (props.open ? "transparent" : "white")};
  display: block;
  height: 2px;
  position: relative;
  transition: background 0.2s ease-out;
  width: 18px;
  ${props => (props.open ? "transparent" : "white")};

  &:before {
    top: ${props => (props.open ? "0px" : "5px")};
    transform: ${props => (props.open ? "rotate(-45deg)" : "none")};
  }

  &:after {
    top: ${props => (props.open ? "0px" : "-5px")};
    transform: ${props => (props.open ? "rotate(45deg)" : "none")};
  }

  :before,
  :after {
    background: white;
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }
`;

const MenuButton = styled.input`
  display: none;
  :hover {
    background-color: #f4f4f4;
  }
`;

const NavigationHamburger = ({ onClick = () => {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
    onClick();
  };
  return (
    <Fragment>
      <MenuButton
        title="Toggle Navigation Menu"
        aria-label="Toggle Navigation Menu"
        type="checkbox"
        id="menu-btn"
        onClick={handleClick}
      />
      <MenuIcon htmlFor="menu-btn">
        <NavIcon open={isOpen} />
      </MenuIcon>
    </Fragment>
  );
};

export default NavigationHamburger;
