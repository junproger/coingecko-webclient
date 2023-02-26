import React from "react";

import { useFetchCoinMart } from "@Hooks/useFetchCoinMart";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import styleCoinMart from "./styleCoinMart.module.scss";

const CoinMart: React.FC = () => {
  const dataCoinMart = useFetchCoinMart();

  return (
    <div className={styleCoinMart.coinmart}>
      <Header />
      <Main coinmartdata={dataCoinMart} />
      <Footer />
    </div>
  );
};

export default CoinMart;
