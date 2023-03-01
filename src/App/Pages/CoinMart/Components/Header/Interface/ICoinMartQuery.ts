import { IQUERYMarket } from "@Interfaces/IQUERYMarket";

export interface ICoinMartQuery {
  coinmartquery: (query: IQUERYMarket) => void;
}
