import React, { useState } from "react";

import { loging } from "@Utils/loging";
import { Routes, Route, Navigate } from "react-router-dom";

import { ContextCurrency, IContextCurrency } from "./../Context";
import CoinMart from "./Pages/CoinMart";
import CoinPage from "./Pages/CoinPage";
import styleApp from "./styleApp.module.scss";

const App: React.FC = () => {
  const [getState, setState] = useState<{
    pagenum: number;
    currency: string;
  }>({ pagenum: 1, currency: "usd" });

  const defaultContext: IContextCurrency = {
    defaultContext: {
      pagenum: getState.pagenum,
      pagemap: {
        pageprev: 0,
        pagefact: 1,
        pagenext: 2,
      },
      currency: getState.currency,
      callvalue(value) {
        setState((prevState) => {
          return { ...prevState, currency: value };
        });
        return;
      },
      callnumber(number) {
        setState((prevState) => {
          return { ...prevState, pagenum: number };
        });
        return;
      },
    },
  };

  loging(
    "context: ",
    defaultContext.defaultContext.currency,
    defaultContext.defaultContext.pagenum,
    "# value: ",
    getState.currency,
    "# number: ",
    getState.pagenum
  );

  return (
    <ContextCurrency.Provider value={defaultContext}>
      <div className={styleApp.appframe}>
        <Routes>
          <Route path="/" element={<Navigate to="/usd/page/1" replace />} />
          <Route
            path="/:idcurr/page/:idpage"
            element={
              <CoinMart
                queryValue={getState.currency}
                queryNumber={getState.pagenum}
              />
            }
          />
          <Route path="/:idcurr/coin/:idcoin" element={<CoinPage />} />
          <Route path="/*" element={<Navigate to="/usd/page/1" replace />} />
        </Routes>
      </div>
    </ContextCurrency.Provider>
  );
};

export default App;
