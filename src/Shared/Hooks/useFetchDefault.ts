import { useEffect, useState } from "react";

import { loging } from "@Utils/loging";
import axios from "axios";
import { ICoinsMarketApiNorm } from "src/Interfaces/ICoinsMarketApiNorm";

export const useFetchDefault = (defaultQuery: string) => {
  const urlCoinMart: string = defaultQuery;

  const [getCoinMart, setCoinMart] = useState<ICoinsMarketApiNorm[]>([]);

  useEffect(() => {
    const fetchDefaultData = async () => {
      try {
        const result = await axios({
          method: "get",
          url: urlCoinMart,
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
  }, [urlCoinMart]);

  return getCoinMart;
};