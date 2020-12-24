import React from "react";
import styled from "styled-components";

const BaseButton = styled.button`
  position: relative;
  font-size: 0.875rem;
  background-color: transparent;
  font-family: Raleway, sans-serif;
  user-select: none;
  border-radius: 4px;
  padding: 0px 16px;
  height: 30px;
  vertical-align: middle;
  font-weight: 500;
  transition: background-color 0.2s ease;
  text-decoration: none;
  text-align: center;
  outline: 0;
  border-width: 0;
  cursor: pointer;
  &:disabled {
    color: rgba(0, 0, 0, 0.26);
    cursor: default;
  }
  &:disabled:hover {
    background-color: transparent;
  }
`;

const FlatButton = styled(BaseButton)`
  color: ${(props) => props.color || ""};
  &:hover {
    background-color: ${(props) => props.hoverColor || ""};
  }
`;

const IconButton = styled(BaseButton)`
  align-self: center;
  padding: 0px;
  margin: 0px;
  height: unset;
`;

const OutlinedButton = styled(BaseButton)`
  border-style: solid;
  border-width: 1px;
  border-color: ${(props) => props.color || ""};
  color: ${(props) => props.color || ""};
  &:hover {
    background-color: ${(props) => props.hoverColor || ""};
  }
  &:disabled {
    border-color: rgba(0, 0, 0, 0.12);
  }
`;

const RaisedButton = styled(BaseButton)`
  color: #fff;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  background-color: ${(props) => props.color || ""};
  &:hover {
    background-color: ${(props) => props.hoverColor || props.color || ""};
  }
  &:disabled {
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0.12);
  }
  &:disabled:hover {
    background-color: rgba(0, 0, 0, 0.12);
  }
`;

const Button = (props) => {
  const {
    children,
    color,
    hoverColor,
    flat,
    flatIcon,
    outlined,
    white,
    type = "button",
    ...rest
  } = props;

  const Component = flat
    ? FlatButton
    : outlined
    ? OutlinedButton
    : flatIcon
    ? IconButton
    : RaisedButton;

  const buttonColor = "color" in props ? color : white ? "#fff" : "";

  const buttonHoverColor = hoverColor
    ? hoverColor
    : white
    ? !flat && !outlined
      ? "#f2f2f2"
      : "rgba(255, 255, 255, 0.1)"
    : "";

  return (
    <Component
      color={buttonColor}
      hoverColor={buttonHoverColor}
      type={type}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Button;
