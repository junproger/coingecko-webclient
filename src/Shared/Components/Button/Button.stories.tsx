import React from "react";

import "@Styles/styleIndex.scss";

import { Button } from "./Button";
import { ButtonProps } from "./propsButton";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
      mapping: {
        true: true,
        false: false,
        undefined: undefined,
      },
    },
    loading: {
      control: {
        type: "boolean",
      },
      mapping: {
        true: true,
        false: false,
        undefined: undefined,
      },
    },
    children: {
      type: { name: "string", required: false },
      defaultValue: "Send",
    },
  },
};

export const Default = (props: ButtonProps) => <Button {...props} />;
