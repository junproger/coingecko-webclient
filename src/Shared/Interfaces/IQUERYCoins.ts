export interface IQUERYCoins {
  paging: number;
  errors: string;
  queries: string;
  currency: string;
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
    paging: number;
    params: {};
    v3docs: string;
    urlreq: string;
    request: string;
  };
}
