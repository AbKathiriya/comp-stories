import React from "react";
import { storiesOf } from "@storybook/react";
import Accordion from "../components/Accordion";

const iconList = ["./icon/Bulb.svg", "./icon/Info.svg", "./icon/Warning.svg"];

storiesOf("Accordion", module)
  .add("default", () => (
    <div>
      <Accordion label={"Panel 1"}>
        <div>
          <p>
            <strong>Common Name:</strong> American Alligator
          </p>
          <p>
            <strong>Distribution:</strong> Texas to North Carolina, US
          </p>
          <p>
            <strong>Endangered Status:</strong> Currently Not Endangered
          </p>
        </div>
      </Accordion>
    </div>
  ))
  .add("onclick", () => {
    class Wrapper extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          isSelected: 0,
        };
      }
      onRadioClick = (id) => {
        this.setState({ isSelected: id });
      };

      render() {
        return (
          <div>
            <Accordion
              label={"Title Text"}
              labelInfo={"Subtitle"}
              onRadioChange={() => this.onRadioClick(1)}
              isRadioSelected={this.state.isSelected === 1}
              iconList={iconList}
              stepText={"Step"}
              stepNumber={"1/2"}
              style={{ margin: "5px 0" }}
            >
              <div style={{ fontSize: "12px" }}>
                <p>
                  <strong>Common Name:</strong> American Alligator
                </p>
                <p>
                  <strong>Distribution:</strong> Texas to North Carolina, US
                </p>
                <p>
                  <strong>Endangered Status:</strong> Currently Not Endangered
                </p>
              </div>
            </Accordion>
            <Accordion
              label={"Title Text"}
              labelInfo={"Subtitle"}
              onRadioChange={() => this.onRadioClick(2)}
              isRadioSelected={this.state.isSelected === 2}
              offerMsg={"Info Message"}
              balanceMsg={"Success Message"}
              warningMsg={"Warning Message"}
              iconList={iconList}
              stepText={"Step"}
              stepNumber={"1/2"}
              style={{ margin: "5px 0" }}
            >
              <div style={{ fontSize: "12px" }}>
                <p>
                  <strong>Common Name:</strong> American Alligator
                </p>
                <p>
                  <strong>Distribution:</strong> Texas to North Carolina, US
                </p>
                <p>
                  <strong>Endangered Status:</strong> Currently Not Endangered
                </p>
              </div>
            </Accordion>
          </div>
        );
      }
    }
    return <Wrapper />;
  });
