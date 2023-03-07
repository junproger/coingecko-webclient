import { useEffect, useState } from "react";

import { IAPIDATACoins } from "@Interfaces/IAPIDATACoins";
import { IMAINDATACoins } from "@Interfaces/IMAINDATACoins";
import { loging } from "@Utils/loging";
import axios, { AxiosError, isAxiosError } from "axios";

export const useFetchCoins = ([idcoin, idcurr]: [string, string]) => {
  const urlCoinInfo = `https://api.coingecko.com/api/v3/coins/${idcoin}`;

  const [getCoinInfo, setCoinInfo] = useState<IMAINDATACoins>({
    paging: 0,
    errors: "",
    queries: "bitcoin",
    currency: "usd",
    results: [],
  });

  useEffect(() => {
    const fetchCoinInfoData = async () => {
      try {
        const result = await axios({
          method: "get",
          url: urlCoinInfo,
        });
        const dump: IAPIDATACoins = result.data;
        setCoinInfo({
          paging: 0,
          errors: "",
          queries: idcoin,
          currency: idcurr,
          results: [
            {
              id: dump.id,
              symbol: dump.symbol,
              name: dump.name,
              errors: "",
              currency: idcurr,
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
                  [idcurr]: dump.market_data.market_cap[idcurr],
                },
                current_price: {
                  [idcurr]: dump.market_data.current_price[idcurr],
                },
                price_change_24h: dump.market_data.price_change_24h,
                price_change_percentage_24h:
                  dump.market_data.price_change_percentage_24h,
                fully_diluted_valuation: {
                  [idcurr]: dump.market_data.fully_diluted_valuation[idcurr],
                },
                circulating_supply: dump.market_data.circulating_supply,
                total_supply: dump.market_data.total_supply,
                max_supply: dump.market_data.max_supply,
              },
            },
          ],
        });
      } catch (error) {
        loging("Axios Error");
        if (isAxiosError(error)) {
          const apiError = error as AxiosError;
          const errorMessage = apiError.message;
          setCoinInfo((prevdata) => {
            return {
              paging: 0,
              errors: "Request failed! The code of coin is incorrect!",
              queries: "",
              currency: "",
              results: { ...prevdata.results },
            };
          });
          loging(apiError);
          loging(errorMessage);
          if (apiError.response) {
            loging(apiError.response);
            loging(apiError.response.data);
            loging(apiError.response.status);
            loging(apiError.response.headers);
          } else if (apiError.request) {
            loging(apiError.request);
            loging(apiError.message);
          } else {
            loging(apiError);
            loging(apiError.message);
          }
        }
      }
    };
    fetchCoinInfoData();
  }, [idcoin, idcurr, urlCoinInfo]);

  return getCoinInfo;
};
