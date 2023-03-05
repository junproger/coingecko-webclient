import React, { useEffect, useState } from "react";

import { makerQueryMarket } from "@Assistants/makerQueryMarket";
import { makerQuerySearch } from "@Assistants/makerQuerySearch";
import { useFetchMarket } from "@Hooks/useFetchMarket";
import { useFetchSearch } from "@Hooks/useFetchSearch";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import styleCoinMart from "./styleCoinMart.module.scss";

interface IQueriesMart {
  queryValue: string;
  queryNumber: number;
}

const CoinMart: React.FC<IQueriesMart> = ({ queryValue, queryNumber }) => {
  const [getRequest, setRequest] = useState<[string, number, string]>([
    queryValue,
    queryNumber,
    queryValue,
  ]);

  useEffect(() => {
    setRequest([queryValue, queryNumber, queryValue]);
  }, [queryValue, queryNumber]);

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
