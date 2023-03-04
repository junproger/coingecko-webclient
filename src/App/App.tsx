import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import CoinMart from "./Pages/CoinMart";
import CoinPage from "./Pages/CoinPage";
import styleApp from "./styleApp.module.scss";

const App: React.FC = () => {
  return (
    <div className={styleApp.appframe}>
      <Routes>
        <Route path="/" element={<Navigate to="/usd" replace />} />
        <Route path="/:idcurr" element={<CoinMart />} />
        <Route path="/:idcurr/page/:idpage" element={<CoinMart />} />
        <Route path="/:idcurr/coin/:idcoin" element={<CoinPage />} />
        <Route path="/*" element={<Navigate to="/usd" replace />} />
      </Routes>
    </div>
  );
};

export default App;
