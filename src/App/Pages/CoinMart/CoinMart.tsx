import React, { useEffect, useState } from "react";

import { makerQueryMarket } from "@Assistants/makerQueryMarket";
import { makerQuerySearch } from "@Assistants/makerQuerySearch";
import { useFetchMarket } from "@Hooks/useFetchMarket";
import { useFetchSearch } from "@Hooks/useFetchSearch";
import { useParams } from "react-router-dom";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import styleCoinMart from "./styleCoinMart.module.scss";

interface IQueryValue {
  queryValue: string;
}

const CoinMart: React.FC<IQueryValue> = ({ queryValue }) => {
  const { idpage } = useParams<{ idpage: string }>();
  const pageNum: number = parseInt(idpage || "1", 10);

  const [getUrl, setUrl] = useState<number>(pageNum);

  const [getRequest, setRequest] = useState<[string, number, string]>([
    queryValue,
    getUrl,
    queryValue,
  ]);

  useEffect(() => {
    setUrl(pageNum);
    setRequest([queryValue, getUrl, queryValue]);
  }, [pageNum, queryValue, getUrl]);

  const fetchHUB = {
    defaultFetch: useFetchMarket(makerQueryMarket(getRequest)),
    defaultSearch: useFetchSearch(makerQuerySearch(getRequest)),
    // defaultChoose: (this will be MultyDropdown),
  };

  return (
    <div className={styleCoinMart.coinmart}>
      <Header
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
