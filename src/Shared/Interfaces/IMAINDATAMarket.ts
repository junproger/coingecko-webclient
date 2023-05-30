import { IAPIDATAMarket } from "./IAPIDATAMarket";

export interface IMAINDATAMarket {
  errors: string;
  queries: string;
  currency: string;
  factpage: number;
  perpage: number;
  endpage: boolean;
  results: [] | IAPIDATAMarket[];
}
