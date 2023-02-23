import React from "react";

import { Loader } from "@Components/Loader";
import classNames from "classnames";

import { WithLoaderProps } from "./propsWithLoader";
import styleWithLoader from "./styleWithLoader.module.scss";

export const WithLoader: React.FC<WithLoaderProps> = ({
  loading = false,
  className,
  children,
}) => {
  const withLoaderClasses = classNames(
    styleWithLoader["with-loader"],
    className
  );
  return (
    <div className={withLoaderClasses}>
      {children}
      {loading && <Loader className={styleWithLoader["with-loader__loader"]} />}
    </div>
  );
};
