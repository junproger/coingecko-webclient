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
    defaultFetch: useFetchDefault(getQuery.request),
    defaultSearch: useFetchSearch(getQuery.request),
    defaultChoose: null,
  };

  /**  const fetchSWITCH = (getQuery: IQueryDefault) => {
    switch (getQuery.hook) {
      case "market":
        return dataDefault.defaultFetch;
      case "search":
        return dataDefault.defaultSearch;
      default:
        return dataDefault.defaultFetch;
    }
  }; */

  return (
    <div className={styleCoinMart.coinmart}>
      <Header coinmartquery={setQuery} />
      <Main coinmartdata={fetchHUB.defaultFetch} />
      <Footer />
    </div>
  );
};

export default CoinMart;
