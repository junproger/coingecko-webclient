export interface IQueryDefault {
  hook: string;
  control: {
    type: string;
    path: string;
  };
  handler: null;
  query: string;
  params: {
    vs_currency: string;
    rep_page: number;
    page: number;
  };
  urlreq: string;
  request: string;
  api: string;
}
