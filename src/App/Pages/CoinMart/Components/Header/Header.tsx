import React from "react";

import Choose from "./Components/Choose";
import Navigate from "./Components/Navigate";
import Notice from "./Components/Notice";
import Search from "./Components/Search";
import styleHeader from "./styleHeader.module.scss";

interface IHeaderWithError {
  coinmarterror: string;
}

const Header: React.FC<IHeaderWithError> = ({ coinmarterror }) => {
  return (
    <header className={styleHeader.header}>
      <Search coinmarterror={coinmarterror} />
      <Notice coinmarterror={coinmarterror} />
      <Choose />
      <Navigate />
    </header>
  );
};

export default Header;
