import React from "react";

import CoinMart from "./Pages/CoinMart";
import styleApp from "./styleApp.module.scss";

const App: React.FC = () => {
  return (
    <div className={styleApp.app}>
      <CoinMart />
    </div>
  );
};

export default App;
