import React from "react";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import styleCoinMart from "./styleCoinMart.module.scss";

const CoinMart: React.FC = () => {
  return (
    <div className={styleCoinMart.coinmart}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default CoinMart;
