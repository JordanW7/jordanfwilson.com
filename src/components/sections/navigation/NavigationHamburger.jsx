import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../common/Button";

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

const StyledButton = styled(Button)`
  position: relative;
  margin: 10px;
  padding: 15px 5px;
`;

const NavigationHamburger = ({ onClick = () => {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
    onClick();
  };
  return (
    <StyledButton
      onClick={handleClick}
      flatIcon
      aria-label="Toggle Navigation Menu"
    >
      <NavIcon open={isOpen} />
    </StyledButton>
  );
};

export default NavigationHamburger;
