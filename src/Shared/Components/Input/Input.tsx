import React, { ChangeEvent, InputHTMLAttributes } from "react";

import classNames from "classnames";
import "./styleInput.scss";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  value: string;
  disabled?: boolean | undefined;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

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
