import React, { ReactNode } from "react";

import { Loader } from "@Components/Loader";
import classNames from "classnames";

import "./styleWithLoader.scss";

export interface WithLoaderProps {
  loading: boolean | undefined;
  className?: string;
  children: ReactNode;
}

export const WithLoader: React.FC<WithLoaderProps> = ({
  loading = false,
  className,
  children,
}) => {
  const withLoaderClasses = classNames("with-loader", className);
  return (
    <div className={withLoaderClasses}>
      {children}
      {loading && <Loader className="with-loader__loader" />}
    </div>
  );
};
