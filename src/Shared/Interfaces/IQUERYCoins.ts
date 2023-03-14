export interface IQUERYCoins {
  errors: string;
  queries: string;
  currency: string;
  factpage: number;
  perpage: number;
  scheme: {
    api: string;
    hook: string;
    scheme: string;
    errors: string;
    control: {
      type: string;
      path: string;
    };
    assist: {
      type: string;
      path: string;
    };
    handler: {
      type: string;
      path: string;
    };
    queries: string;
    currency: string;
    factpage: number;
    perpage: number;
    params: null;
    v3docs: string;
    urlreq: string;
    request: string;
  };
}
