import React from "react";

import Choose from "./Components/Choose";
import Navigate from "./Components/Navigate";
import Search from "./Components/Search";
import styleHeader from "./styleHeader.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styleHeader.header}>
      <Search />
      <Choose />
      <Navigate />
    </header>
  );
};

export default Header;
