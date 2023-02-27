import React, { ChangeEvent } from "react";

import classNames from "classnames";

import { CheckBoxProps } from "./propsCheckBox";
import styleCheckBox from "./styleCheckBox.module.scss";

export const CheckBox: React.FC<CheckBoxProps> = ({
  checked = false,
  disabled = false,
  onChange,
  className,
  ...attrib
}) => {
  const checkClasses = classNames(
    styleCheckBox.checkbox,
    { [styleCheckBox.checkbox_disabled]: disabled },
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
