import { IQueryDefault } from "src/Interfaces/IQueryDefault";

export interface ICoinMartQuery {
  coinmartquery: (query: IQueryDefault) => void;
}
