import { IQUERYGlobal } from "@Interfaces/IQUERYGlobal";

export const QUERYGlobal: IQUERYGlobal = {
  errors: "",
  queries: "global",
  currency: "usd",
  factpage: 0,
  perpage: 0,
  scheme: {
    api: "/global",
    hook: "global",
    scheme: "global",
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
    urlreq: "https://api.coingecko.com/api/v3/global",
    request: "https://api.coingecko.com/api/v3/global",
  },
};
