"use client";
import React from "react";
import { ButtonWrapper, StyledButton, ButtonText } from "./Button.styles";

interface ButtonProps {
  name: string;
  icon?: React.ReactNode | string;
  style?: React.CSSProperties;
  className?: string;
  onClick: (() => void) | undefined;
}

const Button = ({ name, icon, style, className, onClick }: ButtonProps) => {
  return (
    <ButtonWrapper className={className}>
      <StyledButton onClick={onClick} style={style}>
        {icon &&
          (typeof icon === "string" ? (
            <img src={icon} alt="icon" className="w-5 h-5" />
          ) : (
            icon
          ))}
        <ButtonText>{name}</ButtonText>
      </StyledButton>
    </ButtonWrapper>
  );
};

export default Button;
