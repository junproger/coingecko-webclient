import React from "react";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import styleCoinPage from "./styleCoinPage.module.scss";

const CoinPage: React.FC = () => {
  return (
    <div className={styleCoinPage.coinpage}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default CoinPage;
