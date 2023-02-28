import { useEffect, useState } from "react";

import { IQueryDefault } from "@Interfaces/IQueryDefault";
import { ISearchCoinsApiNorm } from "@Interfaces/ISearchCoinsApiNorm";
import { loging } from "@Utils/loging";
import axios from "axios";

export const useFetchSearch = (defaultQuery: IQueryDefault) => {
  const urlCoinMart: IQueryDefault = defaultQuery;

  const [getSearchCoins, setSearchCoins] = useState<ISearchCoinsApiNorm[]>([]);

  useEffect(() => {
    if (defaultQuery.hook !== "search") return;
    const fetchSearchData = async () => {
      try {
        const result = await axios({
          method: "get",
          url: urlCoinMart.request,
        });
        setSearchCoins(
          await result.data.coins.map((dump: ISearchCoinsApiNorm) => ({
            id: dump.id,
            name: dump.name,
            api_symbol: dump.api_symbol,
            symbol: dump.symbol,
            market_cap_rank: dump.market_cap_rank,
            thumb: dump.thumb,
            large: dump.large,
          }))
        );
      } catch (err) {
        loging(err);
      }
    };
    fetchSearchData();
  }, [defaultQuery.hook, urlCoinMart]);

  return getSearchCoins;
};
