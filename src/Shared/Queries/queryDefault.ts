import { IQueryDefault } from "src/Interfaces/IQueryDefault";

export const queryDefault: IQueryDefault = {
  api: "coins",
  hook: "market",
  datas: "market",
  control: {
    type: "page",
    path: "./App/Pages/CoinMart",
  },
  handler: null,
  query: "usd",
  currency: "usd",
  paging: "&per_page=10&page=1",
  params: {
    required: "vs_currency",
    vs_currency: "usd",
    per_page: 10,
    page: 1,
  },
  urlreq: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
  request:
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=1",
};
