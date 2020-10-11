import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import RadioButton from "./RadioButton";
import IconImage from "./IconImage";

const GlobalStyles = createGlobalStyle`
  .disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;

const AccordionDiv = styled.div`
  border-radius: 2px;
  background-color: #fff;
  padding: 1.3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #ddd;

  .icon-list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .icon-img {
    margin-left: 10px;
    max-height: 1.3em;
  }

  .another {
    padding: 1em 0 0 1em;

    .icon-img {
      margin-left: 2px;
      max-height: 2.5em;
    }
  }
`;

const AccordionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  line-height: 1.25;
  color: #3e3e52;

  .lable-info {
    font-size: 12px;
    line-height: 1.67;
    color: #7e7e8c;
    margin-left: 10px;
  }

  .title-left,
  .title-right {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 2em;

    .step-detail {
      color: #3e3e52;
      font-size: 14px;
      line-height: 1.43;
    }
  }
`;

const AccordionPanel = styled.div`
  background: #fff;
  padding: 1em 2em;
`;

const Messages = styled.div`
  display: flex;
  font-size: 12px;
  line-height: 1.67;
  padding: 1em 0 0 3em;

  .offer-msg {
    color: #465986;
  }

  .balance-msg {
    color: #38b87c;
  }

  .warning-msg {
    color: #ff9b00;
  }

  .msg-with-bar {
    display: flex;
  }
`;

const Bar = styled.div`
  color: grey;
  padding: 0 0.5em;
`;

const Accordion = (props) => {
  const {
    children,
    isDisabled,
    label,
    labelInfo,
    onRadioChange,
    isRadioSelected,
    iconList,
    stepText,
    stepNumber,
    offerMsg,
    balanceMsg,
    warningMsg,
  } = props;

  let lableInfoHtml = null;
  let iconHtml = null;
  const messages = {};
  const msgElements = [];
  let msgHtml = null;

  if (labelInfo) {
    lableInfoHtml = <div className="lable-info">{labelInfo}</div>;
  }

  if (iconList && iconList.length) {
    iconHtml = iconList.map((icon, i) => {
      return <IconImage className="icon-img" key={i} src={icon} alt="Icon" />;
    });
  }

  if (offerMsg) {
    messages.offer = offerMsg;
  }
  if (balanceMsg) {
    messages.balance = balanceMsg;
  }
  if (warningMsg) {
    messages.warning = warningMsg;
  }

  if (Object.keys(messages).length > 0) {
    Object.keys(messages).forEach((msgKey, i) => {
      msgElements.push(
        <div className={`${msgKey}-msg`}>
          {i === 0 ? (
            messages[msgKey]
          ) : (
            <div className="msg-with-bar">
              <Bar>|</Bar>
              {messages[msgKey]}
            </div>
          )}
        </div>
      );
    });
  }
  msgHtml = msgElements.length > 0 && <Messages>{msgElements}</Messages>;

  return (
    <React.Fragment>
      <GlobalStyles />
      <AccordionDiv className={isDisabled ? "disabled" : ""} {...props}>
        <AccordionTitle onClick={onRadioChange}>
          <div className="title-left">
            <RadioButton isSelected={isRadioSelected} label={label} id={label} />
            {lableInfoHtml}
            <div className="icon-list">{iconHtml}</div>
          </div>
          <div className="title-right">
            <div className="step-detail">
              {isRadioSelected && stepText && `${stepText} ${stepNumber}`}
            </div>
          </div>
        </AccordionTitle>
        {!isRadioSelected && msgHtml}
        {isRadioSelected && <AccordionPanel>{children}</AccordionPanel>}
      </AccordionDiv>
    </React.Fragment>
  );
};

export default Accordion;
