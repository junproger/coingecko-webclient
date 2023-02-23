import React, { ReactNode, ButtonHTMLAttributes } from "react";

import { Loader } from "@Components/Loader";
import { LoaderSize } from "@Components/Loader/propsLoader";
import classNames from "classnames";

import "./styleButton.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean | undefined;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
  disabled?: boolean;
}

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
