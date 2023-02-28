import React from "react";

import Choose from "./Components/Choose";
import Navigate from "./Components/Navigate";
import Search from "./Components/Search";
import { ICoinMartQuery } from "./Interface/ICoinMartQuery";
import styleHeader from "./styleHeader.module.scss";

const Header: React.FC<ICoinMartQuery> = ({ coinmartquery }) => {
  return (
    <header className={styleHeader.header}>
      <Search coinmartquery={coinmartquery} />
      <Choose />
      <Navigate />
    </header>
  );
};

export default Header;
