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

interface IQueriesMart {
  queryValue: string;
  queryDigit: number;
  setupValue: (value: string) => void;
  setupDigit: (value: number) => void;
}

const CoinMart: React.FC<IQueriesMart> = ({
  queryValue,
  queryDigit,
  setupValue,
  setupDigit,
}) => {
  const { idcurr, idpage } = useParams<{
    idcurr: string;
    idpage: string;
  }>();
  const pageNumb = +(idpage || "1");
  const pageCurr = idcurr || "usd";

  const [getRequest, setRequest] = useState<[string, number, string]>([
    pageCurr,
    pageNumb,
    pageCurr,
  ]);

  useEffect(() => {
    if (pageCurr && pageNumb) {
      if (pageCurr !== queryValue) {
        setupValue(pageCurr);
      }
      if (pageNumb !== queryDigit) {
        setupDigit(pageNumb);
      }
      if (pageCurr !== queryValue || pageNumb !== queryDigit) {
        setRequest([pageCurr, pageNumb, pageCurr]);
      }
    }
  }, [pageCurr, pageNumb, queryDigit, queryValue, setupDigit, setupValue]);

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
