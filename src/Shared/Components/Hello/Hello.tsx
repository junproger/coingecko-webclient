import React from "react";

import styleHello from "./styleHello.module.scss";

const Hello: React.FC = () => {
  return <div className={styleHello.hello}>Hello!!!</div>;
};

export default Hello;
