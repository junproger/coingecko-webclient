import { IQUERYCatlist } from "@Interfaces/IQUERYCatlist";

export const QUERYCatlist: IQUERYCatlist = {
  errors: "",
  queries: "global",
  currency: "usd",
  factpage: 0,
  perpage: 0,
  scheme: {
    api: "/categories",
    hook: "categories",
    scheme: "categories",
    errors: "",
    control: {
      type: "page",
      path: "./App/Pages/CoinPage",
    },
    assist: {
      type: "",
      path: "",
    },
    handler: {
      type: "useFetchGlobal",
      path: "@Hooks/useFetchGlobal",
    },
    queries: "global",
    currency: "usd",
    factpage: 0,
    perpage: 0,
    params: null,
    v3docs: "https://www.coingecko.com/api/documentations/v3",
    urlreq: "https://api.coingecko.com/api/v3/coins/categories/list",
    request: "https://api.coingecko.com/api/v3/coins/categories/list",
  },
};
