import { IQUERYMarket } from "@Interfaces/IQUERYMarket";

export const makerQueryMarket = ([value, digit, curren]: [
  string,
  number,
  string
]): IQUERYMarket => {
  const paging = digit;
  const endpage = true;
  const pageend = false;
  const errors = "";
  const queries = value;
  const currency = curren;
  const scheme = {
    api: "coins",
    hook: "market",
    scheme: "market",
    errors: "",
    control: {
      type: "page",
      path: "./App/Pages/CoinMart",
    },
    handler: {
      type: "useFetchMarket",
      path: "@Hooks/useFetchMarket",
    },
    queries: queries,
    currency: currency,
    paging: paging,
    params: {
      pagination: "&per_page=10&page=1",
      required: "vs_currency",
      vs_currency: queries,
      per_page: 10,
      page: paging,
    },
    v3docs: "https://www.coingecko.com/api/documentations/v3",
    urlreq:
      "https://api.coingecko.com/api/v3/coins/markets?per_page=10&page=1&vs_currency=",
    request: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${queries}&per_page=10&page=${paging}`,
  };
  return {
    paging: paging,
    endpage: endpage,
    pageend: pageend,
    errors: errors,
    queries: queries,
    currency: currency,
    scheme: scheme,
  };
};
