import React from "react";

import "@Styles/styleIndex.scss";

import { categoriesList } from "@Configs/categoriesList";

import { MultiDropdown } from "./MultiDropdown";
import { MultiDropdownProps, Option } from "./propsMultiDropdown";

const OPTIONS = categoriesList;

export default {
  title: "MultiDropdown",
  component: MultiDropdown,
  argTypes: {
    value: {
      mapping: String,
      control: "object",
    },
    disabled: {
      mapping: {
        true: true,
        false: false,
        undefined: undefined,
      },
      control: "boolean",
    },
    multiChoose: {
      mapping: {
        true: true,
        false: false,
        undefined: undefined,
      },
      control: "boolean",
    },
  },
};

export const Default = (props: MultiDropdownProps) => {
  const [value, setValue] = React.useState<Option[]>(
    Array.isArray(props.value) ? props.value : []
  );

  return (
    <MultiDropdown
      value={value}
      options={OPTIONS}
      tabIndex={1}
      multiChoose={props.multiChoose}
      onChange={setValue}
      pluralizeOptions={(values: Option[]) =>
        values.length === 0 ? "Choose an options" : `Choosed: ${values.length}`
      }
      disabled={props.disabled}
    />
  );
};
