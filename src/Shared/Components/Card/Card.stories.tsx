import React from "react";

import "@Styles/styleIndex.scss";

import { Card } from "./Card";
import { CardProps } from "./propsCard";

export default {
  title: "Card",
  component: Card,
  argTypes: {
    image: {
      defaultValue: "/logo512.png",
      control: "text",
    },
    title: {
      mapping: {
        undefined: undefined,
      },
      control: "text",
    },
    subtitle: {
      mapping: {
        undefined: undefined,
      },
      control: "text",
    },
    price: {
      mapping: {
        undefined: undefined,
      },
      control: "text",
    },
    change: {
      mapping: {
        undefined: undefined,
      },
      control: "text",
    },
  },
};

export const Default = (props: CardProps) => <Card {...props} />;
