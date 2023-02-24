import React from "react";

import { LogoType } from "@Components/LogoType";

import styleChoose from "./styleChoose.module.scss";

const Choose: React.FC = () => {
  return (
    <div className={styleChoose.choose}>
      <LogoType children="Coins" />
      Choose
    </div>
  );
};

export default Choose;
