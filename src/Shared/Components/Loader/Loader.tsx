import React from "react";

import classNames from "classnames";

import "@Styles/styleIndex.scss";
import "./styleLoader.scss";

export enum LoaderSize {
  s = "s",
  m = "m",
  l = "l",
}

export interface LoaderProps {
  loading?: boolean | undefined;
  size?: LoaderSize;
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({
  loading = true,
  size = LoaderSize.m,
  className,
}) => {
  const loaderClasses = classNames("loader", `loader_size-${size}`, className);
  return loading ? <div className={loaderClasses}></div> : null;
};
