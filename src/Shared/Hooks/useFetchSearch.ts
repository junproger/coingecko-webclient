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
    errors: "",
    queries: "btc",
    currency: "btc",
    factpage: 0,
    perpage: 0,
    endpage: false,
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
          errors: dataScheme.errors,
          queries: dataScheme.queries,
          currency: dataScheme.currency,
          factpage: dataScheme.factpage,
          perpage: dataScheme.perpage,
          endpage: result.data.length < dataScheme.perpage,
          results: result.data.coins.map((dump: IAPIDATASearch) => ({
            id: dump.id,
            name: dump.name,
            api_symbol: dump.api_symbol,
            symbol: dump.symbol,
            errors: dataScheme.errors,
            currency: dataScheme.currency,
            factpage: dataScheme.factpage,
            endpage: result.data.length < dataScheme.perpage,
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
              errors: "Request failed! The code of currency is incorrect!",
              queries: dataScheme.queries,
              currency: dataScheme.currency,
              factpage: dataScheme.factpage,
              perpage: dataScheme.perpage,
              endpage: false,
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
    dataScheme.factpage,
    dataScheme.hook,
    dataScheme.perpage,
    dataScheme.queries,
    urlCoinMart,
  ]);

  return getSearchCoins;
};
