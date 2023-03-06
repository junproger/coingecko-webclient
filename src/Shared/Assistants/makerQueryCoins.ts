import { IQUERYCoins } from "@Interfaces/IQUERYCoins";

export const makerQueryCoins = ([value, curren]: [
  string,
  string
]): IQUERYCoins => {
  const paging = 0;
  const errors = "";
  const queries = value;
  const currency = curren;
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
    paging: paging,
    params: {},
    v3docs: "https://www.coingecko.com/api/documentations/v3",
    urlreq: "https://api.coingecko.com/api/v3/coins",
    request: `https://api.coingecko.com/api/v3/coins/${queries}`,
  };
  return {
    paging: paging,
    errors: errors,
    queries: queries,
    currency: currency,
    scheme: scheme,
  };
};
