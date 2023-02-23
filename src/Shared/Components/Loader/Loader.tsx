import React from "react";

import classNames from "classnames";

import { LoaderProps, LoaderSize } from "./propsLoader";

import "./styleLoader.scss";

export const Loader: React.FC<LoaderProps> = ({
  loading = true,
  size = LoaderSize.m,
  className,
}) => {
  const loaderClasses = classNames("loader", `loader_size-${size}`, className);
  return loading ? <div className={loaderClasses}></div> : null;
};
