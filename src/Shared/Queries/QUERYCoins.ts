import { IQUERYCoins } from "@Interfaces/IQUERYCoins";

export const QUERYCoins: IQUERYCoins = {
  paging: 0,
  errors: "",
  queries: "bitcoin",
  currency: "usd",
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
    paging: 0,
    params: {},
    v3docs: "https://www.coingecko.com/api/documentations/v3",
    urlreq: "https://api.coingecko.com/api/v3/coins",
    request: "https://api.coingecko.com/api/v3/coins/bitcoin",
  },
};
