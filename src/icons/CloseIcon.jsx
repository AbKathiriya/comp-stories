import React from "react";
import styled from "styled-components";

const StyledSvg = styled.svg`
  margin: ${(props) => (props.margin ? props.margin : "")};
`;

const Close = (props) => {
  return (
    <StyledSvg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={props.width}
      height={props.height}
      viewBox="0 0 357 357"
      fill={props.color}
      {...props}
    >
      <g>
        <g id="close">
          <polygon
            points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 
         214.2,178.5 		"
          />
        </g>
      </g>
    </StyledSvg>
  );
};

export default Close;
