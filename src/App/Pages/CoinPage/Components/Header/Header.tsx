import React from "react";

import Catlist from "./Components/Catlist";
import Prices from "./Components/Prices";
import Titles from "./Components/Titles";
import Values from "./Components/Values";
import { ICoinInfoData } from "./Interface/ICoinInfoData";
import styleHeader from "./styleHeader.module.scss";

const Header: React.FC<ICoinInfoData> = ({ coininfodata }) => {
  return (
    <header className={styleHeader.header}>
      <Titles coininfodata={coininfodata} />
      <Prices coininfodata={coininfodata} />
      <Catlist coininfodata={coininfodata} />
      <Values coininfodata={coininfodata} />
    </header>
  );
};

export default Header;
