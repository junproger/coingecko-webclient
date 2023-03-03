import React, { useEffect, useState } from "react";

import { makerQueryMarket } from "@Assistants/makerQueryMarket";
import { makerQuerySearch } from "@Assistants/makerQuerySearch";
import { useFetchMarket } from "@Hooks/useFetchMarket";
import { useFetchSearch } from "@Hooks/useFetchSearch";
import { Params, useParams } from "react-router-dom";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import styleCoinMart from "./styleCoinMart.module.scss";

const CoinMart: React.FC = () => {
  const { idpage } = useParams<{ [idpage in keyof Params]?: string }>();
  const pageNum = parseInt(idpage || "1", 10);

  const [getUrl, setUrl] = useState<number>(pageNum);
  const [getQuery, setQuery] = useState<string>("usd");
  const [getRequest, setRequest] = useState<[string, number]>([
    getQuery,
    getUrl,
  ]);

  useEffect(() => {
    setUrl(pageNum);
    setRequest([getQuery, getUrl]);
  }, [getUrl, getQuery, pageNum]);

  const fetchHUB = {
    defaultFetch: useFetchMarket(makerQueryMarket(getRequest)),
    defaultSearch: useFetchSearch(makerQuerySearch(getRequest)),
    // defaultChoose: null,
  };

  return (
    <div className={styleCoinMart.coinmart}>
      <Header
        coinmartquery={setQuery}
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
