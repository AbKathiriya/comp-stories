import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Checkbox } from "../components/Checkbox";

storiesOf("Checkbox", module).add("default", () => {
  class Wrapper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isSelected: false,
      };
    }
    onCheckboxClick = (e) =>
      this.setState({ isSelected: e.target.checked })

    render() {
      const props = {
        ...this.props,
        checked: this.state.isSelected,
        onChange: this.onCheckboxClick,
      };
      return (
        <div style={{ fontFamily: "system-ui" }}>
          <label>
            <Checkbox
              {...props}
            />
            <span style={{ marginLeft: 8 }}>Sample Checkbox Label</span>
          </label>
        </div>
      );
    }
  }
  return <Wrapper />;
});
