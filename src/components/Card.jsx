import React from "react";
import styled from "styled-components";
import Button from "./Button.jsx";
import Close from "../icons/CloseIcon";

const CardWrapper = styled.div`
  border: 1px solid #b4b4b4;
  border-radius: 3px;
  border-left: ${(props) =>
    props.ribbon ? `8px solid ${props.ribbon}` : "1px solid #b4b4b4"};
  margin: 15px 5px;
  background: ${(props) => (props.bgColor ? props.bgColor : "#FFF")};
  width: ${(props) => (props.width ? props.width : "auto")};
`;

const CardHeader = styled.header`
  padding: 5px;
  padding-left: 10px;
  border-bottom: 1px dashed #b4b4b4;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

const CardHeading = styled.span`
  display: flex;
  align-items: center;
  color: #000;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.49px;
  line-height: 18px;
  margin: 5px 0;
`;

const WarningText = styled.span`
  color: #a42015;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.49px;
  line-height: 18px;
  text-align: left;
`;

const CardHeaderActions = styled.div`
  display: flex;
  align-items: center;
`;

const CardBody = styled.div`
  padding: 10px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.49px;
  line-height: 18px;
  text-align: left;
`;

const StyledImg = styled.img`
  margin: ${(props) => (props.margin ? props.margin : "")};
`;

const Header = (props) => {
  let lessonData = props.lesson ? props.lesson : null;
  let suggestionData =
    lessonData && lessonData.suggestion ? lessonData.suggestion : null;
  return props.lesson ? (
    <CardHeader>
      <CardHeading>
        <StyledImg
          src={suggestionData ? suggestionData.icon : lessonData.icon}
          alt="Icon"
          margin="5px 10px 5px 0"
        />
        {suggestionData ? suggestionData.title : lessonData.date}
      </CardHeading>
      {props.noActions ? null : (
        <CardHeaderActions>
          <Button>Edit</Button>
          <Close color="#A42015" height="15px" margin="0 10px" />
        </CardHeaderActions>
      )}
    </CardHeader>
  ) : (
    <CardHeader>
      <CardHeading>
        <StyledImg
          src="./icon/Warning.svg"
          alt="Warning"
          margin="5px 10px 5px 0"
        />
        <WarningText>Please add a lesson</WarningText>
      </CardHeading>
      <CardHeaderActions>
        <Button>Add lesson</Button>
      </CardHeaderActions>
    </CardHeader>
  );
};

const Body = (props) => {
  let lessonData = props.lesson ? props.lesson : null;
  let suggestionData =
    lessonData && lessonData.suggestion ? lessonData.suggestion : null;

  return props.lesson ? (
    <CardBody>
      {suggestionData && (
        <CardHeading>
          <StyledImg src={lessonData.icon} alt="Icon" margin="5px 10px 5px 0" />
          {lessonData.date}
        </CardHeading>
      )}
      <div style={{ display: "flex" }}>
        {props.lesson.time}
        {props.lesson.noOflessons
          ? ` (${props.lesson.noOflessons} lessons)`
          : null}
        {props.lesson.info ? (
          <StyledImg src="./icon/Info.svg" alt="Info" margin="0 10px" />
        ) : null}
        {props.lesson.info}
      </div>
      <div>{props.lesson.place}</div>
    </CardBody>
  ) : (
    <CardBody>
      <div>{"You must select all lessons before you can book"}</div>
    </CardBody>
  );
};

const Card = (props) => {
  return (
    <CardWrapper ribbon={props.ribbon} bgColor={props.background} {...props}>
      <Header {...props} />
      <Body {...props} />
    </CardWrapper>
  );
};

export default Card;
