import { IAPIDATASearch } from "./IAPIDATASearch";

export interface IMAINDATASearch {
  paging: number;
  errors: string;
  queries: string;
  currency: string;
  results: [] | IAPIDATASearch[];
}
