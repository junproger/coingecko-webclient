import { IQueryDefault } from "src/Interfaces/IQueryDefault";

export const queryDefault: IQueryDefault = {
  hook: "market",
  control: {
    type: "page",
    path: "./App/Pages/CoinMart",
  },
  handler: null,
  query: "usd&per_page=10&page=1",
  params: {
    vs_currency: "usd",
    rep_page: 10,
    page: 1,
  },
  urlreq: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=",
  request:
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=1",
  api: "coins",
};
