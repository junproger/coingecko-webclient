import React, { ChangeEvent } from "react";

import classNames from "classnames";

import { InputProps } from "./propsInput";
import styleInput from "./styleInput.module.scss";

export const Input: React.FC<InputProps> = ({
  inputref,
  value = "",
  placeholder = "",
  onChange,
  className,
  disabled = false,
  ...attrib
}) => {
  const inputClasses = classNames(
    styleInput.input,
    { [styleInput.input_disabled]: disabled },
    className
  );
  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    return onChange(event.target.value);
  };
  return (
    <input
      type="text"
      value={value}
      ref={inputref}
      className={inputClasses}
      placeholder={placeholder}
      onChange={inputHandler}
      disabled={disabled}
      {...attrib}
    />
  );
};
