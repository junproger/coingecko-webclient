import { IAPIDATACoins } from "./IAPIDATACoins";

export interface IMAINDATACoins {
  paging: number;
  errors: string;
  queries: string;
  currency: string;
  results: [] | IAPIDATACoins[];
}
