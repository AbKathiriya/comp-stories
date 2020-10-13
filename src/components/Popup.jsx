import * as React from "react";
import styled from "styled-components";
import Close from "../icons/CloseIcon";

const StyledPopUpOuter = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledPopUpInner = styled.div`
  width: ${(props) => props.popupWidth};
  padding: 2em;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  .popup-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1em;
    width: 100%;
  }
`;

const Popup = (props) => {
  return (
    <React.Fragment>
      <StyledPopUpOuter>
        <StyledPopUpInner {...props}>
          <div className="popup-title">
            {props.titleNode}
            {
              props.showCloseIcon && (
                <Close color="#d84e55" height="12px" onClick={props.onClose} />
              )
            }
          </div>
          {props.children}
        </StyledPopUpInner>
      </StyledPopUpOuter>
    </React.Fragment>
  );
};

Popup.defaultProps = {
  popupWidth: "auto",
  showCloseIcon: true,
  onClose: () => {},
};

export default Popup;
