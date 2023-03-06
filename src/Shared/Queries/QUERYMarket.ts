import { IQUERYMarket } from "@Interfaces/IQUERYMarket";

export const QUERYMarket: IQUERYMarket = {
  paging: 1,
  endpage: true,
  pageend: false,
  errors: "",
  queries: "usd",
  currency: "usd",
  scheme: {
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
    queries: "usd",
    currency: "usd",
    paging: 1,
    params: {
      pagination: "&per_page=10&page=1",
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
