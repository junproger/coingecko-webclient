import React from "react";

export interface CardProps {
  alt?: string;
  image: string;
  className?: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  price?: React.ReactNode;
  change?: React.ReactNode;
  onClick?: React.MouseEventHandler;
}
