import * as React from "react";
import styled from "styled-components";

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`;
const Icon = styled.svg`
  fill: none;
  stroke: #fff;
  stroke-width: 2px;
`;
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) => props.checked ? "#eb5b63" : "#fff"};
  border: solid 1px ${(props) => props.checked ? "#eb5b63" : "#3e3e52"};
  border-radius: 3px;
  transition: all 150ms;

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

// ${/* sc-selector */ HiddenCheckbox}:focus + & {
  //   box-shadow: 0 0 0 3px pink;
  // }

export const Checkbox = (props) => {
  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={props.checked} {...props} />
      <StyledCheckbox checked={props.checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
};

Checkbox.defaultProps = {
  onChange: () => {},
};
