import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import ApiPing from "./Pages/ApiPing";
import CoinMart from "./Pages/CoinMart";
import CoinPage from "./Pages/CoinPage";
import styleApp from "./styleApp.module.scss";

const App: React.FC = () => {
  return (
    <div className={styleApp.appframe}>
      <Routes>
        <Route path="/" element={<CoinMart />} />
        <Route path="/:idpage" element={<CoinMart />} />
        <Route path="/coins/:idcoin" element={<CoinPage />} />
        <Route path="/coins/:idcoin/:idcurr" element={<CoinPage />} />
        <Route path="/ping" element={<ApiPing />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
