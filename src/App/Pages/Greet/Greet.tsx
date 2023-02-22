import React from "react";

import Hello from "@Components/Hello";

import "./styleGreet.scss";

const Greet: React.FC = () => {
  return (
    <div className="Greet">
      <Hello />
    </div>
  );
};

export default Greet;
