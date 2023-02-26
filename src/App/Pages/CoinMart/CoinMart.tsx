import React, { useState } from "react";

import { useFetchCoinMart } from "@Hooks/useFetchCoinMart";
import { queryDefaul } from "@Queries/queryDefault";
import { IQueryDefault } from "src/Interfaces/IQueryDefault";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import styleCoinMart from "./styleCoinMart.module.scss";

const CoinMart: React.FC = () => {
  const [getQuery, setQuery] = useState<IQueryDefault>(queryDefaul);
  const dataCoinMart = useFetchCoinMart(getQuery.request);
  return (
    <div className={styleCoinMart.coinmart}>
      <Header />
      <Main coinmartdata={dataCoinMart} />
      <Footer />
    </div>
  );
};

export default CoinMart;
