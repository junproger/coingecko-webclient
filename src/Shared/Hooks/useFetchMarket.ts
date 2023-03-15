import { useEffect, useState } from "react";

import { IAPIDATAMarket } from "@Interfaces/IAPIDATAMarket";
import { IMAINDATAMarket } from "@Interfaces/IMAINDATAMarket";
import { IQUERYMarket } from "@Interfaces/IQUERYMarket";
import { loging } from "@Utils/loging";
import axios, { AxiosError, isAxiosError } from "axios";

export const useFetchMarket = (defaultQuery: IQUERYMarket) => {
  const dataScheme = defaultQuery.scheme;
  const urlCoinMart: string = dataScheme.request;

  const [getMarketCoins, setMartketCoins] = useState<IMAINDATAMarket>({
    errors: "",
    queries: "btc",
    currency: "btc",
    factpage: 0,
    perpage: 0,
    endpage: false,
    results: [],
  });

  useEffect(() => {
    if (dataScheme.hook !== "market") return;
    const fetchDefaultData = async () => {
      if (!urlCoinMart) return loging("Hasn't URL!");
      try {
        const result = await axios({
          method: "get",
          url: urlCoinMart,
        });
        setMartketCoins({
          errors: dataScheme.errors,
          queries: dataScheme.queries,
          currency: dataScheme.currency,
          factpage: dataScheme.factpage,
          perpage: dataScheme.perpage,
          endpage: result.data.length < dataScheme.perpage,
          results: result.data.map((dump: IAPIDATAMarket) => ({
            id: dump.id,
            symbol: dump.symbol,
            name: dump.name,
            image: dump.image,
            errors: dataScheme.errors,
            currency: dataScheme.currency,
            factpage: dataScheme.factpage,
            endpage: result.data.length < dataScheme.perpage,
            current_price: dump.current_price,
            market_cap: dump.market_cap,
            market_cap_rank: dump.market_cap_rank,
            price_change_24h: dump.price_change_24h,
            price_change_percentage_24h: dump.price_change_percentage_24h,
          })),
        });
      } catch (error) {
        loging("Axios Error");
        if (isAxiosError(error)) {
          const apiError = error as AxiosError;
          const errorMessage = apiError.message;
          setMartketCoins((prevdata) => {
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
    fetchDefaultData();
  }, [
    dataScheme.currency,
    dataScheme.errors,
    dataScheme.factpage,
    dataScheme.hook,
    dataScheme.perpage,
    dataScheme.queries,
    urlCoinMart,
  ]);

  return getMarketCoins;
};
