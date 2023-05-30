import { IQUERYFilter } from "@Interfaces/IQUERYFilter";

export const QUERYFilter: IQUERYFilter = {
  errors: "",
  queries: "usd",
  currency: "usd",
  factpage: 1,
  perpage: 10,
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
    factpage: 1,
    perpage: 10,
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
