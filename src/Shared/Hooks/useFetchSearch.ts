import { useEffect, useState } from "react";

import { IAPIDATASearch } from "@Interfaces/IAPIDATASearch";
import { IMAINDATASearch } from "@Interfaces/IMAINDATASearch";
import { IQUERYMarket } from "@Interfaces/IQUERYMarket";
import { loging } from "@Utils/loging";
import axios, { AxiosError, isAxiosError } from "axios";

export const useFetchSearch = (defaultQuery: IQUERYMarket) => {
  const dataScheme = defaultQuery.scheme;
  const urlCoinMart: string = defaultQuery.scheme.request;

  const [getSearchCoins, setSearchCoins] = useState<IMAINDATASearch>({
    paging: 0,
    errors: "",
    queries: "",
    currency: "",
    results: [],
  });

  useEffect(() => {
    if (dataScheme.hook !== "search") return;
    const fetchSearchData = async () => {
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
