export interface IQUERYMarket {
  paging: number;
  errors: string;
  queries: string;
  scheme: {
    api: string;
    hook: string;
    scheme: string;
    errors: string;
    control: {
      type: string;
      path: string;
    };
    handler: null;
    queries: string;
    currency: string;
    paging: string;
    params: {
      required: string;
      vs_currency: string;
      per_page: number;
      page: number;
    };
    v3docs: string;
    urlreq: string;
    request: string;
  };
}
