import { useEffect, useState } from "react";

import { loging } from "@Utils/loging";
import axios from "axios";
import { ISearchCoinsApiNorm } from "src/Interfaces/ISearchCoinsApiNorm";

export const useFetchSearch = (defaultQuery: string) => {
  const urlCoinMart: string = defaultQuery;

  const [getSearchCoins, setSearchCoins] = useState<ISearchCoinsApiNorm[]>([]);

  useEffect(() => {
    const fetchSearchData = async () => {
      try {
        const result = await axios({
          method: "get",
          url: urlCoinMart,
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
  }, [urlCoinMart]);

  return getSearchCoins;
};
