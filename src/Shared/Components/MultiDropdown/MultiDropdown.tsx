import React, { useState } from "react";

import classNames from "classnames";

import { MultiDropdownProps, Option } from "./propsMultiDropdown";
import "./styleMultiDropdown.scss";

export const MultiDropdown: React.FC<MultiDropdownProps> = ({
  tabIndex = 1,
  value = [],
  options,
  onChange,
  placeHolder,
  disabled = false,
  pluralizeOptions,
  className,
}) => {
  /** State for a visibility of MDD list */
  const [getVisible, setVisible] = useState<boolean>(false);

  /** Const with classes of the styles MDD */
  const MultiDropdownClasses = classNames(
    "multi-dropdown",
    { "multi-dropdown_disabled": disabled },
    className
  );

  /** Handler for the selected options MDD */
  const clickHandle = (option: Option) => {
    if (value.every((item) => item.key !== option.key)) {
      onChange([...value, option]);
    } else {
      onChange(value.filter((item) => item.key !== option.key));
    }
  };

  /** Checking are choosed options */
  const isItemChoosed = (item: Option) => {
    if (value.find((elem) => elem.key === item.key)) {
      return true;
    } else {
      return false;
    }
  };

  /** Handler for the selected options MDD */
  return (
    <div className={MultiDropdownClasses}>
      <div
        tabIndex={tabIndex}
        className="multi-dropdown__window"
        onClick={() => setVisible(!getVisible)}
      >
        {pluralizeOptions(value) || placeHolder}
      </div>
      {getVisible && !disabled && (
        <div className="multi-dropdown__list">
          {options.map((option) => (
            <div
              id={option.key}
              key={option.key}
              onClick={() => clickHandle(option)}
              className={
                isItemChoosed(option)
                  ? "multi-dropdown__item multi-dropdown__item_choosed"
                  : "multi-dropdown__item"
              }
            >
              {option.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
