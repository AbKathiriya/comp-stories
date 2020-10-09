import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: block;
  padding: 5px 12px;
  background-color: #004fef;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  color: #fcfcfc;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.42px;
  line-height: 15px;
  text-align: center;
  &:hover {
    opacity: 0.8;
  }
`;

const Button = (props) => {
  return (
    <StyledButton onClick={() => props.onClick()}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
