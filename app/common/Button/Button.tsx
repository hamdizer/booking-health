import React from "react";
import { ButtonWrapper, StyledButton, ButtonText } from "./Button.styles";

interface ButtonProps {
  name: string;
  icon?: React.ReactNode | string;
  style?: React.CSSProperties;
}

const Button = ({ name, icon, style }: ButtonProps) => {
  return (
    <ButtonWrapper>
      <StyledButton disableRipple>
        {icon &&
          (typeof icon === "string" ? <img src={icon} alt="icon" /> : icon)}
        <ButtonText>{name}</ButtonText>
      </StyledButton>
    </ButtonWrapper>
  );
};

export default Button;
