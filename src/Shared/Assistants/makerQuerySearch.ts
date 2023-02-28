import { IQueryDefault } from "@Interfaces/IQueryDefault";

export const makerQuerySearch = (value: string): IQueryDefault => {
  const api = "coins";
  const hook = "market";
  const datas = "market";
  const control = {
    type: "input",
    path: "@Components/Input",
  };
  const handler = null;
  const query = value;
  const currency = query;
  const paging = "&per_page=10&page=1";
  const params = {
    required: "vs_currency",
    vs_currency: "usd",
    per_page: 10,
    page: 1,
  };
  const urlreq =
    "https://api.coingecko.com/api/v3/coins/markets?per_page=10&page=1&vs_currency=";
  const request = `https://api.coingecko.com/api/v3/coins/markets?per_page=10&page=1&vs_currency=${query}`;
  return {
    api: api,
    hook: hook,
    datas: datas,
    control: control,
    handler: handler,
    query: query,
    currency: currency,
    paging: paging,
    params: params,
    urlreq: urlreq,
    request: request,
  };
};
