import { IQUERYCoins } from "@Interfaces/IQUERYCoins";

export const makerQueryCoins = ([curren, value]: [
  string,
  string
]): IQUERYCoins => {
  const errors = "";
  const queries = value;
  const currency = curren;
  const factpage = 0;
  const perpage = 1;
  const scheme = {
    api: "/coins/{id}",
    hook: "coins",
    scheme: "coins",
    errors: errors,
    control: {
      type: "page",
      path: "./App/Pages/CoinPage",
    },
    assist: {
      type: "makerQueryCoins",
      path: "@Assistants/makerQueryCoins",
    },
    handler: {
      type: "useFetchCoins",
      path: "@Hooks/useFetchCoins",
    },
    queries: queries,
    currency: currency,
    factpage: factpage,
    perpage: perpage,
    params: null,
    v3docs: "https://www.coingecko.com/api/documentations/v3",
    urlreq: "https://api.coingecko.com/api/v3/coins",
    request: `https://api.coingecko.com/api/v3/coins/${queries}`,
  };
  return {
    errors: errors,
    queries: queries,
    currency: currency,
    factpage: factpage,
    perpage: perpage,
    scheme: scheme,
  };
};
