import React, { useState } from "react";

import { useFetchMarket } from "@Hooks/useFetchMarket";
import { useFetchSearch } from "@Hooks/useFetchSearch";
import { IQUERYMarket } from "@Interfaces/IQUERYMarket";
import { QUERYMarket } from "@Queries/QUERYMarket";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import styleCoinMart from "./styleCoinMart.module.scss";

const CoinMart: React.FC = () => {
  const [getQuery, setQuery] = useState<IQUERYMarket>(QUERYMarket);

  const fetchHUB = {
    defaultFetch: useFetchMarket(getQuery),
    defaultSearch: useFetchSearch(getQuery),
    // defaultChoose: null,
  };

  // const interimReducer = () => null;

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
