import { IAPIDATASearch } from "./IAPIDATASearch";

export interface IMAINDATASearch {
  errors: string;
  queries: string;
  currency: string;
  factpage: number;
  perpage: number;
  endpage: boolean;
  results: [] | IAPIDATASearch[];
}
