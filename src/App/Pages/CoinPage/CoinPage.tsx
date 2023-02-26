import React from "react";

import { useFetchCoinInfo } from "@Hooks/useFetchCoinInfo";
import { useParams } from "react-router-dom";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import styleCoinPage from "./styleCoinPage.module.scss";

const CoinPage: React.FC = () => {
  const { idcoin } = useParams<{ idcoin: string }>();

  const CoinInfo = useFetchCoinInfo(idcoin);
  return (
    <div className={styleCoinPage.coinpage}>
      <Header coininfodata={CoinInfo} />
      <Main description={CoinInfo?.description.en || ""} />
      <Footer />
    </div>
  );
};

export default CoinPage;
