import React from "react";

import { Link } from "react-router-dom";

import styleError from "./styleError.module.scss";

const Error: React.FC = () => {
  return (
    <div className={styleError.error}>
      <h2>404, Not Found</h2>
      <p>This page doesn't exist.</p>
      <p>
        Return to the <Link to="/">Main page</Link>.
      </p>
    </div>
  );
};

export default Error;
