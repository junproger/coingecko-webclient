import React, { useState } from "react";

import { loging } from "@Utils/loging";
import { Routes, Route, Navigate } from "react-router-dom";

import { ContextCurrency, IContextCurrency } from "./../Context";
import CoinMart from "./Pages/CoinMart";
import CoinPage from "./Pages/CoinPage";
import styleApp from "./styleApp.module.scss";

interface IAppState {
  pagenum: number;
  pagemap: number[];
  currency: string;
}

const App: React.FC = () => {
  const [getState, setState] = useState<IAppState>({
    pagenum: 1,
    pagemap: [0, 1, 2],
    currency: "usd",
  });

  const setCurrValue = (value: string) => {
    if (!value) return;
    setState((prevState) => {
      return { ...prevState, currency: value };
    });
  };

  const setPageDigit = (digit: number) => {
    if (!digit) return;
    setState((prevState) => {
      return {
        ...prevState,
        pagenum: digit,
        pagemap: [digit - 1, digit, digit + 1],
      };
    });
  };

  const defaultContext: IContextCurrency = {
    defaultContext: {
      pagenum: getState.pagenum,
      pagemap: [getState.pagenum - 1, getState.pagenum, getState.pagenum + 1],
      currency: getState.currency,
    },
  };

  loging(
    "value: ",
    getState.currency,
    "# number: ",
    getState.pagenum,
    getState.pagemap,
    "# context: ",
    defaultContext.defaultContext.currency,
    defaultContext.defaultContext.pagenum,
    defaultContext.defaultContext.pagemap
  );

  return (
    <ContextCurrency.Provider value={defaultContext}>
      <div className={styleApp.appframe}>
        <Routes>
          <Route path="/" element={<Navigate to="/usd/pages/1" replace />} />
          <Route
            path="/:idcurr/pages/:idpage"
            element={
              <CoinMart
                setupValue={setCurrValue}
                setupDigit={setPageDigit}
                queryValue={getState.currency}
                queryDigit={getState.pagenum}
              />
            }
          />
          <Route path="/:idcurr/coins/:idcoin" element={<CoinPage />} />
          <Route path="/*" element={<Navigate to="/usd/pages/1" replace />} />
        </Routes>
      </div>
    </ContextCurrency.Provider>
  );
};

export default App;
