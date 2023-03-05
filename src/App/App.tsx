import React, { useState } from "react";

import { loging } from "@Utils/loging";
import { Routes, Route, Navigate } from "react-router-dom";

import { ContextCurrency, IContextCurrency } from "./../Context";
import CoinMart from "./Pages/CoinMart";
import CoinPage from "./Pages/CoinPage";
import styleApp from "./styleApp.module.scss";

const App: React.FC = () => {
  const [getState, setState] = useState<string>("usd");

  const defaultContext: IContextCurrency = {
    defaultContext: {
      pagenum: 1,
      currency: getState,
      callbacks(value) {
        setState(value);
        return;
      },
    },
  };

  loging(
    "i'm callback!: ",
    getState,
    "# i'm context!: ",
    defaultContext.defaultContext.currency
  );

  return (
    <ContextCurrency.Provider value={defaultContext}>
      <div className={styleApp.appframe}>
        <Routes>
          <Route path="/" element={<Navigate to="/usd/page/1" replace />} />
          <Route
            path="/:idcurr/page/:idpage"
            element={<CoinMart queryValue={getState} />}
          />
          <Route path="/:idcurr/coin/:idcoin" element={<CoinPage />} />
          <Route path="/*" element={<Navigate to="/usd/page/1" replace />} />
        </Routes>
      </div>
    </ContextCurrency.Provider>
  );
};

export default App;
