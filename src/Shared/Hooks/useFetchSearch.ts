import { useEffect, useState } from "react";

import { IAPIDATASearch } from "@Interfaces/IAPIDATASearch";
import { IMAINDATASearch } from "@Interfaces/IMAINDATASearch";
import { IQUERYMarket } from "@Interfaces/IQUERYMarket";
import { loging } from "@Utils/loging";
import axios, { AxiosError, isAxiosError } from "axios";

export const useFetchSearch = (defaultQuery: IQUERYMarket) => {
  const dataScheme = defaultQuery.scheme;
  const urlCoinMart: string = dataScheme.request;

  const [getSearchCoins, setSearchCoins] = useState<IMAINDATASearch>({
    paging: 1,
    errors: "",
    queries: "btc",
    currency: "btc",
    totalitems: 0,
    thepageend: 0,
    results: [],
  });

  useEffect(() => {
    if (dataScheme.hook !== "search") return;
    const fetchSearchData = async () => {
      if (!urlCoinMart) return loging("Hasn't URL!");
      try {
        const result = await axios({
          method: "get",
          url: urlCoinMart,
        });
        setSearchCoins({
          paging: 1,
          errors: dataScheme.errors,
          queries: dataScheme.queries,
          currency: dataScheme.currency,
          totalitems: result.data.coins.length,
          thepageend: Math.trunc(result.data.coins.length / 10),
          results: result.data.coins.map((dump: IAPIDATASearch) => ({
            id: dump.id,
            name: dump.name,
            api_symbol: dump.api_symbol,
            symbol: dump.symbol,
            errors: dataScheme.errors,
            currency: dataScheme.currency,
            market_cap_rank: dump.market_cap_rank,
            thumb: dump.thumb,
            large: dump.large,
          })),
        });
      } catch (error) {
        loging("Axios Error");
        if (isAxiosError(error)) {
          const apiError = error as AxiosError;
          const errorMessage = apiError.message;
          setSearchCoins((prevdata) => {
            return {
              paging: 0,
              errors: "Request failed! The code of currency is incorrect!",
              queries: "",
              currency: "",
              totalitems: 0,
              thepageend: 0,
              results: [...prevdata.results],
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
    fetchSearchData();
  }, [
    dataScheme.currency,
    dataScheme.errors,
    dataScheme.hook,
    dataScheme.queries,
    urlCoinMart,
  ]);

  return getSearchCoins;
};
