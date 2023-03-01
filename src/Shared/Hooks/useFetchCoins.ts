import { useEffect, useState } from "react";

import { IAPIDATACoins } from "@Interfaces/IAPIDATACoins";
import { loging } from "@Utils/loging";
import axios from "axios";

export const useFetchCoins = (idcoin: string | undefined) => {
  const urlCoinInfo = `https://api.coingecko.com/api/v3/coins/${idcoin}`;

  const [getCoinInfo, setCoinInfo] = useState<IAPIDATACoins>();

  useEffect(() => {
    const fetchCoinInfoData = async () => {
      try {
        const result = await axios({
          method: "get",
          url: urlCoinInfo,
        });
        const dump: IAPIDATACoins = result.data;
        setCoinInfo({
          id: dump.id,
          symbol: dump.symbol,
          name: dump.name,
          categories: dump.categories,
          market_cap_rank: dump.market_cap_rank,
          image: {
            thumb: dump.image.thumb,
            small: dump.image.small,
            large: dump.image.large,
          },
          description: {
            en: dump.description.en,
          },
          market_data: {
            market_cap: {
              usd: dump.market_data.market_cap.usd,
            },
            current_price: {
              usd: dump.market_data.current_price.usd,
            },
            price_change_24h: dump.market_data.price_change_24h,
            price_change_percentage_24h:
              dump.market_data.price_change_percentage_24h,
            fully_diluted_valuation: {
              usd: dump.market_data.fully_diluted_valuation.usd,
            },
            circulating_supply: dump.market_data.circulating_supply,
            total_supply: dump.market_data.total_supply,
            max_supply: dump.market_data.max_supply,
          },
        });
      } catch (err) {
        loging(err);
      }
    };
    fetchCoinInfoData();
  }, [urlCoinInfo]);

  return getCoinInfo;
};
