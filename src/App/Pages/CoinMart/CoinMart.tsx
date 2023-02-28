import React, { useState } from "react";

import { useFetchDefault } from "@Hooks/useFetchDefault";
import { useFetchSearch } from "@Hooks/useFetchSearch";
import { queryDefault } from "@Queries/queryDefault";
import { IQueryDefault } from "src/Interfaces/IQueryDefault";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import styleCoinMart from "./styleCoinMart.module.scss";

const CoinMart: React.FC = () => {
  const [getQuery, setQuery] = useState<IQueryDefault>(queryDefault);

  const fetchHUB = {
    defaultFetch: useFetchDefault(getQuery),
    defaultSearch: useFetchSearch(getQuery),
    // defaultChoose: null,
  };

  return (
    <div className={styleCoinMart.coinmart}>
      <Header coinmartquery={setQuery} />
      <Main
        coinmarketdata={fetchHUB.defaultFetch}
        coinsearchdata={fetchHUB.defaultSearch}
      />
      <Footer />
    </div>
  );
};

export default CoinMart;
