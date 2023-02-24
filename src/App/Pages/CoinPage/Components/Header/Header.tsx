import React from "react";

import Prices from "./Components/Prices";
import Refers from "./Components/Refers";
import Titles from "./Components/Titles";

const Header: React.FC = () => {
  return (
    <header>
      <Titles />
      <Prices />
      <Refers />
    </header>
  );
};

export default Header;
