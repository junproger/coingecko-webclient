import { IQUERYMarket } from "@Interfaces/IQUERYMarket";

export const QUERYMarket: IQUERYMarket = {
  paging: 1,
  errors: "",
  queries: "usd",
  scheme: {
    api: "coins",
    hook: "market",
    scheme: "market",
    errors: "",
    control: {
      type: "page",
      path: "./App/Pages/CoinMart",
    },
    handler: null,
    queries: "usd",
    currency: "usd",
    paging: "&per_page=10&page=1",
    params: {
      required: "vs_currency",
      vs_currency: "usd",
      per_page: 10,
      page: 1,
    },
    v3docs: "https://www.coingecko.com/api/documentations/v3",
    urlreq: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
    request:
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=1",
  },
};
