import React from "react";
import styled from "styled-components";

const StyledButtonTabs = styled.div`
  text-align: left;
  margin: 5px;
`;

const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 5px 0px;
`;

const Li = styled.li`
  background: ${(props) => (props.selected ? "#643ba2" : "#ded4ed")};
  color: ${(props) => (props.selected ? "#FFF" : "#000")};
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.56px;
  line-height: 20px;
  text-align: center;
  margin-right: 1px;
  &:first-child {
    border-radius: 3px 0 0 3px;
  }
  &:last-child {
    border-radius: 0 3px 3px 0;
  }
  &:hover {
    cursor: pointer;
    background: ${(props) => (props.selected ? "#643ba2" : "#D4C8E6")};
    color: ${(props) => (props.selected ? "#FFF" : "#000")};
  }
`;

const ButtonTabs = (props) => {
  return (
    <StyledButtonTabs>
      <Ul>
        {props.data.map((item) => {
          return (
            <Li
              selected={props.selectedTab === item}
              onClick={() => props.onClick(item)}
            >
              {item}
            </Li>
          );
        })}
      </Ul>
    </StyledButtonTabs>
  );
};

export default ButtonTabs;
