import React from "react";

import Hello from "@Components/Hello";

import styleGreet from "./styleGreet.module.scss";

const Greet: React.FC = () => {
  return (
    <div className={styleGreet.greet}>
      <Hello />
    </div>
  );
};

export default Greet;
