import { IAPIDATACoins } from "./IAPIDATACoins";

export interface IMAINDATACoins {
  errors: string;
  queries: string;
  currency: string;
  factpage: number;
  perpage: number;
  endpage: boolean;
  results: [] | IAPIDATACoins[];
}
