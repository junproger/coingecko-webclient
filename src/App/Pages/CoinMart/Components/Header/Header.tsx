import React from "react";

import Choose from "./Components/Choose";
import Navigate from "./Components/Navigate";
import Search from "./Components/Search";

const Header: React.FC = () => {
  return (
    <header>
      <Search />
      <Choose />
      <Navigate />
    </header>
  );
};

export default Header;
