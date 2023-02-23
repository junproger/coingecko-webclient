import React from "react";

export interface CheckBoxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  checked?: boolean | undefined;
  disabled?: boolean | undefined;
  onChange: (value: boolean) => void;
  className?: string;
}
