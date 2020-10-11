import React from "react";
import { storiesOf } from "@storybook/react";
import Card from "../components/Card";

const lesson1 = {
  date: "2nd April 2019",
  time: "8:00-9:30 am",
  noOflessons: "2",
  place: "Tokyo - Akasaka",
  icon: "./icon/Calendar.svg",
  info: <a href="#">Details</a>,
};

const lesson2 = {
  date: "3rd April 2019",
  time: "9:00-9:45 am",
  icon: "./icon/Calendar.svg",
  place: "Tokyo - Akasaka",
};

const lesson3 = {
  date: "8th April 2019",
  time: "9:00-9:45 am",
  icon: "./icon/Calendar.svg",
  place: "Tokyo - Akasaka",
  info: <a href="#">Details</a>,
  suggestion: {
    title: "Suggested Lesson",
    icon: "./icon/Bulb.svg",
  },
};

storiesOf("Card", module)
  .add("default", () => <Card width="30%" />)
  .add("with ribbon", () => (
    <Card lesson={lesson2} ribbon="#3ddc97" width="30%" />
  ))
  .add("with background", () => (
    <Card lesson={lesson2} ribbon="#3ddc97" background="#EEFAF4" width="30%" />
  ))
  .add("with link", () => (
    <Card lesson={lesson1} ribbon="#3ddc97" background="#EEFAF4" width="30%" />
  ))
  .add("Suggestion card", () => (
    <Card lesson={lesson3} ribbon="#D87515" background="#FBEEE3" width="30%" />
  ));
