import React from "react";

export interface WithLoaderProps {
  loading: boolean | undefined;
  className?: string;
  children: React.ReactNode;
}
