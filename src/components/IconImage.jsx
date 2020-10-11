import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  margin: ${(props) => (props.margin ? props.margin : "")};
`;

const IconImage = (props) => {
    return (
        <StyledImg {...props} />
    )
}

export default IconImage;