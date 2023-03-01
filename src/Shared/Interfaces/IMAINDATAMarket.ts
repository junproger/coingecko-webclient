import { IAPIDATAMarket } from "./IAPIDATAMarket";

export interface IMAINDATAMarket {
  paging: number;
  errors: string;
  queries: string;
  results: [] | IAPIDATAMarket[];
}
