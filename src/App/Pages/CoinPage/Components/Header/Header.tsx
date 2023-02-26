import React from "react";

import Prices from "./Components/Prices";
import Refers from "./Components/Refers";
import Titles from "./Components/Titles";
import { ICoinInfoData } from "./Interfaces/ICoinInfoData";

const Header: React.FC<ICoinInfoData> = ({ coininfodata }) => {
  return (
    <header>
      <Titles coininfodata={coininfodata} />
      <Prices coininfodata={coininfodata} />
      <Refers />
    </header>
  );
};

export default Header;
