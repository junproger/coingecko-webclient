import { IQUERYCoins } from "@Interfaces/IQUERYCoins";

export const QUERYCoins: IQUERYCoins = {
  errors: "",
  queries: "bitcoin",
  currency: "usd",
  factpage: 0,
  perpage: 0,
  scheme: {
    api: "/coins/{id}",
    hook: "coins",
    scheme: "coins",
    errors: "",
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
    queries: "bitcoin",
    currency: "usd",
    factpage: 0,
    perpage: 0,
    params: null,
    v3docs: "https://www.coingecko.com/api/documentations/v3",
    urlreq: "https://api.coingecko.com/api/v3/coins",
    request: "https://api.coingecko.com/api/v3/coins/bitcoin",
  },
};
