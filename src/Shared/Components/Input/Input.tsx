import React, { ChangeEvent } from "react";

import classNames from "classnames";

import { InputProps } from "./propsInput";
import "./styleInput.scss";

export const Input: React.FC<InputProps> = ({
  value = "",
  placeholder = "",
  onChange,
  className,
  disabled = false,
  ...attrib
}) => {
  const inputClasses = classNames(
    "input",
    { input_disabled: disabled },
    className
  );
  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    return onChange(event.target.value);
  };
  return (
    <input
      type="text"
      value={value}
      className={inputClasses}
      placeholder={placeholder}
      onChange={inputHandler}
      disabled={disabled}
      {...attrib}
    />
  );
};
