import { IQueryConcept } from "src/Interfaces/IQueryConcept";

export const queryConcept: IQueryConcept = {
  uipath: "/",
  nquery: "Default Query",
  tquery: "Type IQueryDefault",
  dquery: "Query with default loading",
  origin: "./App/Pages/CoinMart/Main/CoinsList",
  apiver: "https://api.coingecko.com/api/v3/",
  apidoc: "https://www.coingecko.com/api/documentations/v3",
  target: "https://api.coingecko.com/api/v3/coins/markets",
  getapi:
    "https://www.coingecko.com/api/documentations/v3#/coins/get_coins_markets",
  params: "?vs_currency=usd&per_page=10&page=1",
  request:
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=1",
  queryHandle: {
    baseUrl: null,
    basePage: null,
    startUrl: null,
    startPage: null,
    currentUrl: null,
    currentPage: null,
    nextUrl: null,
    nextPage: null,
    prevUrl: null,
    prevPage: null,
    endUrl: null,
    endPage: null,
  },
};
