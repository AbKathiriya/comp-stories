import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ButtonTabs from "../components/ButtonTabs";

export const actions = {
  onClick: action("onClick"),
};

storiesOf("ButtonTabs", module).add("default", () => (
  <ButtonTabs data={["Tab1", "Tab2", "Tab3"]} selectedTab="Tab2" {...actions} />
));
