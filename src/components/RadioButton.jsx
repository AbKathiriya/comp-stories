import React from "react";
import styled from "styled-components";

const RadioButtonDiv = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  .radio-label {
    font-weight: ${(props) => (props.isSelected ? "bold" : "normal")};
  }
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  border: 1px solid #c8c8c8;
`;

const RadioButtonInput = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  cursor: pointer;

  &:hover ~ ${RadioButtonLabel} {
    background: #fff;
    border-color: #eb5b63;

    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 4px;
      background: #eb5b63;
    }
  }

  &:checked + ${RadioButtonLabel} {
    background: #fff;
    border: 1px solid #eb5b63;

    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 4px;
      background: #eb5b63;
    }
  }
`;

const RadioButton = (props) => {
  return (
    <RadioButtonDiv {...props}>
      <RadioButtonInput
        id={props.id}
        onChange={props.onRadioChange}
        type="radio"
        checked={props.isSelected}
      />
      <RadioButtonLabel />
      <div className="radio-label">{props.label}</div>
    </RadioButtonDiv>
  );
};

export default RadioButton;
