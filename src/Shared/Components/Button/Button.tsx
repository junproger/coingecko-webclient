import React from "react";

import { Loader } from "@Components/Loader";
import { LoaderSize } from "@Components/Loader";
import classNames from "classnames";

import { ButtonProps } from "./propsButton";

import "./styleButton.scss";

export const Button: React.FC<ButtonProps> = ({
  loading = false,
  disabled = false,
  onClick,
  className,
  children,
  ...attrib
}) => {
  const buttonClasses = classNames(
    "button",
    { button_disabled: loading || disabled },
    className
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
