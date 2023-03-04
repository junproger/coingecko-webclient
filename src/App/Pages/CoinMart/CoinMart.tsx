import React, { useEffect, useState } from "react";

import { makerQueryMarket } from "@Assistants/makerQueryMarket";
import { makerQuerySearch } from "@Assistants/makerQuerySearch";
import { useFetchMarket } from "@Hooks/useFetchMarket";
import { useFetchSearch } from "@Hooks/useFetchSearch";
import { loging } from "@Utils/loging";
import { useParams } from "react-router-dom";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import styleCoinMart from "./styleCoinMart.module.scss";

const CoinMart: React.FC = () => {
  const { idcurr, idpage } = useParams<{
    idcurr: string;
    idpage: string;
  }>();
  const pageNum: number = parseInt(idpage || "1", 10);
  const pageCur: string = idcurr || "usd";

  const [getUrl, setUrl] = useState<number>(pageNum);
  const [getCurr, setCurr] = useState<string>(pageCur);

  const [getQuery, setQuery] = useState<string>(getCurr);
  const [getRequest, setRequest] = useState<[string, number, string]>([
    getQuery,
    getUrl,
    getQuery,
  ]);

  loging(getCurr, getQuery);

  useEffect(() => {
    setUrl(pageNum);
    setCurr(pageCur);
    setRequest([getQuery, getUrl, getQuery]);
  }, [pageNum, pageCur, getUrl, getQuery]);

  const fetchHUB = {
    defaultFetch: useFetchMarket(makerQueryMarket(getRequest)),
    defaultSearch: useFetchSearch(makerQuerySearch(getRequest)),
    // defaultChoose: null,
  };

  return (
    <div className={styleCoinMart.coinmart}>
      <Header
        coinmartquery={setQuery}
        currenciesdata={getQuery}
        coinmarterror={
          fetchHUB.defaultFetch.errors || fetchHUB.defaultSearch.errors
        }
      />
      <Main
        coinmarketdata={fetchHUB.defaultFetch}
        coinsearchdata={fetchHUB.defaultSearch}
      />
      <Footer />
    </div>
  );
};

export default CoinMart;
