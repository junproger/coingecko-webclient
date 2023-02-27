import { IQueryDefault } from "src/Interfaces/IQueryDefault";

export const queryDefault: IQueryDefault = {
  hook: "market",
  control: null,
  handler: null,
  queries: "usd&per_page=10&page=1",
  request:
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=1",
  apidata: null,
};
