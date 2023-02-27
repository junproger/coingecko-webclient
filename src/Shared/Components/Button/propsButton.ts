import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean | undefined;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
}
