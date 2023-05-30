import React, { useEffect, useState } from "react";

import { makerQueryCoins } from "@Assistants/makerQueryCoins";
import { useFetchCoins } from "@Hooks/useFetchCoins";
import { useParams } from "react-router-dom";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import styleCoinPage from "./styleCoinPage.module.scss";

const CoinPage: React.FC = () => {
  const { idcurr, idcoin } = useParams<{
    idcurr: string;
    idcoin: string;
  }>();
  const pathCurr = idcurr || "usd";
  const pathCoin = idcoin || "bitcoin";

  const [getRequest, setRequest] = useState<[string, string]>([
    pathCurr,
    pathCoin,
  ]);

  useEffect(() => {
    if (pathCurr !== getRequest[0] || pathCoin !== getRequest[1]) {
      setRequest([pathCurr, pathCoin]);
    }
  }, [pathCurr, pathCoin, getRequest]);

  const dataCoinInfo = useFetchCoins(makerQueryCoins(getRequest));
  const dataCoinResult = dataCoinInfo.results;

  return (
    <div className={styleCoinPage.coinpage}>
      <Header coininfodata={dataCoinResult[0]} />
      <Main coininfodata={dataCoinResult[0]} />
      <Footer />
    </div>
  );
};

export default CoinPage;
