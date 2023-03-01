import { IAPIDATASearch } from "./IAPIDATASearch";

export interface IMAINDATASearch {
  paging: number;
  errors: string;
  queries: string;
  results: [] | IAPIDATASearch[];
}
