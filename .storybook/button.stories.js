/* eslint-disable no-console */

import React from "react";
import { Button, Badge } from "./Component";

const T = {
  foo: 11,
};

export default {
  title: "Button",
  component: Button,
  args: {},
};

export const WithLog = {
  render: () => (
    <Button onClick={() => console.log("Data:", 1, 3, 4)}>Log Button</Button>
  ),
};

export const WithWarning = {
  render: () => (
    <Button onClick={() => console.warn("Data:", 1, 3, 4)}>Warn Button</Button>
  ),
};

export const WithError = {
  render: () => (
    <Button onClick={() => console.error("Test Error")}>Error Button</Button>
  ),
};

export const WithUncatchedError = {
  render: () => (
    <Button onClick={() => console.log("Data:", T.buu.foo)}>
      Throw Button
    </Button>
  ),
};

export const WithWrongPropType = {
  render: () => <Badge info="Component with React Warning" />,
};
