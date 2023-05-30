import React from "react";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  inputref?: React.MutableRefObject<HTMLInputElement | null>;
  value: string;
  disabled?: boolean | undefined;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}
