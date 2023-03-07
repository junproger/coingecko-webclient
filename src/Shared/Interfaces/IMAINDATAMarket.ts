import { IAPIDATAMarket } from "./IAPIDATAMarket";

export interface IMAINDATAMarket {
  paging: number;
  errors: string;
  queries: string;
  currency: string;
  totalitems: number;
  thepageend: number;
  results: [] | IAPIDATAMarket[];
}
