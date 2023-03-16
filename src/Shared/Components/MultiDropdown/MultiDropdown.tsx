import React, { useState } from "react";

import classNames from "classnames";

import { MultiDropdownProps, Option } from "./propsMultiDropdown";
import styleMultiDropdown from "./styleMultiDropdown.module.scss";

export const MultiDropdown: React.FC<MultiDropdownProps> = ({
  value = [],
  options = [],
  tabIndex = 1,
  multiChoose = false,
  onChange,
  pluralizeOptions,
  placeHolder,
  className,
  disabled = false,
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
    if (value.every((item) => item.category_id !== option.category_id)) {
      if (multiChoose) {
        onChange([...value, option]);
      } else {
        onChange([option]);
      }
    } else {
      onChange(value.filter((item) => item.category_id !== option.category_id));
    }
  };

  /** Checking are choosed options */
  const isItemChoosed = (item: Option) => {
    if (value.find((elem) => elem.category_id === item.category_id)) {
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
              id={option.category_id}
              key={option.category_id}
              onClick={() => clickHandle(option)}
              className={
                isItemChoosed(option)
                  ? isItemChoosedClasses
                  : `${styleMultiDropdown["multi-dropdown__item"]}`
              }
            >
              <span>{option.name}</span>
              <span>{isItemChoosed(option) && "✓"}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
