import { IQueryDefault } from "@Interfaces/IQueryDefault";

export interface ICoinMartQuery {
  coinmartquery: (query: IQueryDefault) => void;
}
