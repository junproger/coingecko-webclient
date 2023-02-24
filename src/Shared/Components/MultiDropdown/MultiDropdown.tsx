import React, { useState } from "react";

import classNames from "classnames";

import { MultiDropdownProps, Option } from "./propsMultiDropdown";
import styleMultiDropdown from "./styleMultiDropdown.module.scss";

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
    styleMultiDropdown["multi-dropdown"],
    { [styleMultiDropdown["multi-dropdown_disabled"]]: disabled },
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

  const isItemChoosedClasses: string =
    `${styleMultiDropdown["multi-dropdown__item"]} ` +
    styleMultiDropdown["multi-dropdown__item_choosed"];

  /** Handler for the selected options MDD */
  return (
    <div className={MultiDropdownClasses}>
      <div
        tabIndex={tabIndex}
        className={styleMultiDropdown["multi-dropdown__window"]}
        onClick={() => setVisible(!getVisible)}
      >
        {pluralizeOptions(value) || (
          <span className={styleMultiDropdown["multi-dropdown__window_holder"]}>
            {placeHolder}
          </span>
        )}
      </div>
      {getVisible && !disabled && (
        <div className={styleMultiDropdown["multi-dropdown__list"]}>
          {options.map((option) => (
            <div
              id={option.key}
              key={option.key}
              onClick={() => clickHandle(option)}
              className={
                isItemChoosed(option)
                  ? isItemChoosedClasses
                  : `${styleMultiDropdown["multi-dropdown__item"]}`
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
