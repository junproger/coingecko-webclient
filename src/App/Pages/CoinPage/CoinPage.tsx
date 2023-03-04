import React from "react";

import { useFetchCoins } from "@Hooks/useFetchCoins";
import { useParams } from "react-router-dom";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import styleCoinPage from "./styleCoinPage.module.scss";

const CoinPage: React.FC = () => {
  const { idcoin, idcurr } = useParams() as {
    idcoin: string;
    idcurr: string;
  };

  const dataCoinInfo = useFetchCoins([idcoin, idcurr]);

  return (
    <div className={styleCoinPage.coinpage}>
      <Header coininfodata={dataCoinInfo} />
      <Main description={dataCoinInfo?.description.en || ""} />
      <Footer />
    </div>
  );
};

export default CoinPage;
