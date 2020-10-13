import { storiesOf } from "@storybook/react";
import * as React from "react";

import Popup from "../components/Popup";

storiesOf("PopUp", module).add("default", () => {
  class Wrapper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isOpen: true,
      };
    }
    onClose = () => {
      this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
      const titleNodeHtml = <div style={{ fontSize: "20px", color: "#eb5b63" }}>Enter Details</div>;
      return this.state.isOpen && (
        <Popup onClose={this.onClose} titleNode={titleNodeHtml}>
          <div>Add your Custom component here..</div>
        </Popup>
      );
    }
  }
  return <Wrapper />;
});
