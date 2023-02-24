import React from "react";

import CoinList from "./Components/CoinList";
import styleMain from "./styleMain.module.scss";

const Main: React.FC = () => {
  return (
    <main className={styleMain.main}>
      <CoinList />
    </main>
  );
};

export default Main;
