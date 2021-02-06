import styled from "styled-components";
import Button from "./common/Button";

const NavIcon = styled.span`
  background: ${(props) => (props.open ? "transparent" : "black")};
  display: block;
  height: 2px;
  position: relative;
  transition: background 0.2s ease-out;
  width: 18px;
  ${(props) => (props.open ? "transparent" : "black")};

  &:before {
    top: ${(props) => (props.open ? "0px" : "5px")};
    transform: ${(props) => (props.open ? "rotate(-45deg)" : "none")};
  }

  &:after {
    top: ${(props) => (props.open ? "0px" : "-5px")};
    transform: ${(props) => (props.open ? "rotate(45deg)" : "none")};
  }

  :before,
  :after {
    background: black;
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

const NavigationHamburger = ({ open, onClick }) => {
  return (
    <StyledButton
      onClick={onClick}
      flatIcon
      aria-label="Toggle Navigation Menu"
    >
      <NavIcon open={open} />
    </StyledButton>
  );
};

export default NavigationHamburger;
