import React, { ChangeEvent, InputHTMLAttributes } from "react";

import classNames from "classnames";

import "@Styles/styleIndex.scss";
import "./styleCheckBox.scss";

export interface CheckBoxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  checked?: boolean | undefined;
  disabled?: boolean | undefined;
  onChange: (value: boolean) => void;
  className?: string;
}

export const CheckBox: React.FC<CheckBoxProps> = ({
  checked = false,
  disabled = false,
  onChange,
  className,
  ...attrib
}) => {
  const checkClasses = classNames(
    "checkbox",
    { checkbox_disabled: disabled },
    className
  );
  const checkHandler = (event: ChangeEvent<HTMLInputElement>) => {
    return onChange(event.target.checked);
  };
  return (
    <input
      type="checkbox"
      checked={checked}
      disabled={disabled}
      className={checkClasses}
      onChange={checkHandler}
      {...attrib}
    />
  );
};
