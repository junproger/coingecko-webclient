import React from "react";

import Choose from "./Components/Choose";
import Navigate from "./Components/Navigate";
import Notice from "./Components/Notice";
import Search from "./Components/Search";
import { ICoinMartQuery } from "./Interface/ICoinMartQuery";
import styleHeader from "./styleHeader.module.scss";

interface IHeaderWithError extends ICoinMartQuery {
  coinmarterror: string;
}

const Header: React.FC<IHeaderWithError> = ({
  coinmartquery,
  coinmarterror,
}) => {
  return (
    <header className={styleHeader.header}>
      <Search coinmartquery={coinmartquery} coinmarterror={coinmarterror} />
      <Notice coinmarterror={coinmarterror} />
      <Choose />
      <Navigate />
    </header>
  );
};

export default Header;
