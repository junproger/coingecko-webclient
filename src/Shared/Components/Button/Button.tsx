import React from "react";

import { Loader, LoaderSize } from "@Components/Loader";
import classNames from "classnames";

import { ButtonProps } from "./propsButton";
import styleButton from "./styleButton.module.scss";

export const Button: React.FC<ButtonProps> = ({
  loading = false,
  disabled = false,
  onClick,
  className = "",
  children,
  ...attrib
}) => {
  const buttonClasses = classNames(
    styleButton.button,
    { [styleButton.button_disabled]: loading || disabled },
    styleButton[className]
  );
  return (
    <button
      disabled={loading || disabled}
      className={buttonClasses}
      onClick={onClick}
      {...attrib}
    >
      {loading && <Loader size={LoaderSize.s} />}
      {children}
    </button>
  );
};
