import { IQUERYMarket } from "@Interfaces/IQUERYMarket";

export const makerQueryMarket = ([value, digit, curren]: [
  string,
  number,
  string
]): IQUERYMarket => {
  const errors = "";
  const queries = value;
  const currency = curren;
  const factpage = digit;
  const perpage = 10;
  const scheme = {
    api: "/coins/markets",
    hook: "market",
    scheme: "market",
    errors: "",
    control: {
      type: "page",
      path: "./App/Pages/CoinMart",
    },
    assist: {
      type: "makerQueryMarket",
      path: "@Assistants/makerQueryMarket",
    },
    handler: {
      type: "useFetchMarket",
      path: "@Hooks/useFetchMarket",
    },
    queries: queries,
    currency: queries,
    factpage: factpage,
    perpage: perpage,
    params: {
      pagination: "&per_page=10&page=1",
      required: "vs_currency",
      vs_currency: queries,
      per_page: perpage,
      page: factpage,
    },
    v3docs: "https://www.coingecko.com/api/documentations/v3",
    urlreq:
      "https://api.coingecko.com/api/v3/coins/markets?per_page=10&page=1&vs_currency=",
    request: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${queries}&per_page=10&page=${factpage}`,
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
