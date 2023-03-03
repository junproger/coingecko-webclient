import React from "react";

import { useFetchCoins } from "@Hooks/useFetchCoins";
import { Params, useParams } from "react-router-dom";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import styleCoinPage from "./styleCoinPage.module.scss";

const CoinPage: React.FC = () => {
  const { idcoin } = useParams<{ [idcoin in keyof Params]?: string }>();

  const dataCoinInfo = useFetchCoins(idcoin);

  return (
    <div className={styleCoinPage.coinpage}>
      <Header coininfodata={dataCoinInfo} />
      <Main description={dataCoinInfo?.description.en || ""} />
      <Footer />
    </div>
  );
};

export default CoinPage;
