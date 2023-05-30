import React from "react";

import "@Styles/styleIndex.scss";

import { WithLoaderProps } from "./propsWithLoader";
import { WithLoader } from "./WithLoader";

export default {
  title: "WithLoader",
  component: WithLoader,
  args: {
    children: "",
  },
};

export const Default = (props: WithLoaderProps) => <WithLoader {...props} />;
