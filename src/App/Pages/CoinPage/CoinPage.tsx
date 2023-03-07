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
  const dataCoinResult = dataCoinInfo.results[0];

  return (
    <div className={styleCoinPage.coinpage}>
      <Header coininfodata={dataCoinResult} />
      <Main description={dataCoinResult?.description.en || ""} />
      <Footer />
    </div>
  );
};

export default CoinPage;
