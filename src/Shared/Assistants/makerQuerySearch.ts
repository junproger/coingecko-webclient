import { IQUERYMarket } from "@Interfaces/IQUERYMarket";

export const makerQuerySearch = (value: string): IQUERYMarket => {
  const paging = 1;
  const errors = "";
  const queries = value;
  const scheme = {
    api: "coins",
    hook: "market",
    scheme: "market",
    errors: "",
    control: {
      type: "input",
      path: "@Components/Input",
    },
    handler: null,
    queries: queries,
    currency: queries,
    paging: "&per_page=10&page=1",
    params: {
      required: "vs_currency",
      vs_currency: "usd",
      per_page: 10,
      page: 1,
    },
    v3docs: "https://www.coingecko.com/api/documentations/v3",
    urlreq:
      "https://api.coingecko.com/api/v3/coins/markets?per_page=10&page=1&vs_currency=",
    request: `https://api.coingecko.com/api/v3/coins/markets?per_page=10&page=1&vs_currency=${queries}`,
  };
  return {
    paging: paging,
    errors: errors,
    queries: queries,
    scheme: scheme,
  };
};
