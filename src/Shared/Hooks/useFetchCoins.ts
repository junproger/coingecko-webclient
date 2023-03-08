import { useEffect, useState } from "react";

import { IAPIDATACoins } from "@Interfaces/IAPIDATACoins";
import { IMAINDATACoins } from "@Interfaces/IMAINDATACoins";
import { IQUERYCoins } from "@Interfaces/IQUERYCoins";
import { loging } from "@Utils/loging";
import axios, { AxiosError, isAxiosError } from "axios";

export const useFetchCoins = (defaultQuery: IQUERYCoins) => {
  const dataScheme = defaultQuery.scheme;
  const urlCoinInfo: string = dataScheme.request;

  const [getCoinsInfo, setCoinsInfo] = useState<IMAINDATACoins>({
    paging: 0,
    errors: "",
    queries: "bitcoin",
    currency: "btc",
    results: [],
  });

  useEffect(() => {
    if (dataScheme.hook !== "coins") return;
    const fetchCoinInfoData = async () => {
      if (!urlCoinInfo) return loging("Hasn't URL!");
      try {
        const result = await axios({
          method: "get",
          url: urlCoinInfo,
        });
        const apidata: IAPIDATACoins = result.data;
        const jsondata: IAPIDATACoins[] = [];
        jsondata.push(apidata);
        setCoinsInfo({
          paging: 0,
          errors: dataScheme.errors,
          queries: dataScheme.queries,
          currency: dataScheme.currency,
          results: jsondata.map((dump: IAPIDATACoins) => ({
            id: dump.id,
            symbol: dump.symbol,
            name: dump.name,
            errors: dataScheme.errors,
            currency: dataScheme.currency,
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
                [dataScheme.currency]:
                  dump.market_data.market_cap[dataScheme.currency],
              },
              current_price: {
                [dataScheme.currency]:
                  dump.market_data.current_price[dataScheme.currency],
              },
              price_change_24h: dump.market_data.price_change_24h,
              price_change_percentage_24h:
                dump.market_data.price_change_percentage_24h,
              fully_diluted_valuation: {
                [dataScheme.currency]:
                  dump.market_data.fully_diluted_valuation[dataScheme.currency],
              },
              circulating_supply: dump.market_data.circulating_supply,
              total_supply: dump.market_data.total_supply,
              max_supply: dump.market_data.max_supply,
            },
          })),
        });
      } catch (error) {
        loging("Axios Error");
        if (isAxiosError(error)) {
          const apiError = error as AxiosError;
          const errorMessage = apiError.message;
          setCoinsInfo((prevdata) => {
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
  }, [
    dataScheme.currency,
    dataScheme.errors,
    dataScheme.hook,
    dataScheme.queries,
    urlCoinInfo,
  ]);

  return getCoinsInfo;
};
