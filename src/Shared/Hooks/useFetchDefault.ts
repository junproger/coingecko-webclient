import { useEffect, useState } from "react";

import { loging } from "@Utils/loging";
import axios from "axios";
import { ICoinsMarketApiNorm } from "src/Interfaces/ICoinsMarketApiNorm";
import { IQueryDefault } from "src/Interfaces/IQueryDefault";

export const useFetchDefault = (defaultQuery: IQueryDefault) => {
  const urlCoinMart: IQueryDefault = defaultQuery;

  const [getCoinMart, setCoinMart] = useState<ICoinsMarketApiNorm[]>([]);

  useEffect(() => {
    if (defaultQuery.hook !== "market") return;
    const fetchDefaultData = async () => {
      try {
        const result = await axios({
          method: "get",
          url: urlCoinMart.request,
        });
        setCoinMart(
          await result.data.map((dump: ICoinsMarketApiNorm) => ({
            id: dump.id,
            symbol: dump.symbol,
            name: dump.name,
            image: dump.image,
            current_price: dump.current_price,
            market_cap: dump.market_cap,
            market_cap_rank: dump.market_cap_rank,
            price_change_24h: dump.price_change_24h,
            price_change_percentage_24h: dump.price_change_percentage_24h,
          }))
        );
      } catch (err) {
        loging(err);
      }
    };
    fetchDefaultData();
  }, [defaultQuery.hook, urlCoinMart]);

  return getCoinMart;
};
