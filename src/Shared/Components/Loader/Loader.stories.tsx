import React from "react";

import "@Styles/styleIndex.scss";

import { Loader } from "./Loader";
import { LoaderProps } from "./propsLoader";

export default {
  title: "Loader",
  component: Loader,
  argTypes: {
    size: {
      mapping: {
        undefined: undefined,
      },
      control: "text",
    },
    loading: {
      mapping: {
        true: true,
        false: false,
        undefined: undefined,
      },
      control: "boolean",
    },
  },
};

export const Default = (props: LoaderProps) => <Loader {...props} />;
