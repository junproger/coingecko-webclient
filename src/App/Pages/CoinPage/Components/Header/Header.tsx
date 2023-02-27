import React from "react";

import Prices from "./Components/Prices";
import Titles from "./Components/Titles";
import Values from "./Components/Values";
import { ICoinInfoData } from "./Interfaces/ICoinInfoData";
import styleHeader from "./styleHeader.module.scss";

const Header: React.FC<ICoinInfoData> = ({ coininfodata }) => {
  return (
    <header className={styleHeader.header}>
      <Titles coininfodata={coininfodata} />
      <Prices coininfodata={coininfodata} />
      <Values coininfodata={coininfodata} />
    </header>
  );
};

export default Header;
