export interface IQueryDefault {
  api: string;
  hook: string;
  datas: string;
  control: {
    type: string;
    path: string;
  };
  handler: null;
  query: string;
  currency: string;
  paging: string;
  params: {
    required: string;
    vs_currency: string;
    per_page: number;
    page: number;
  };
  urlreq: string;
  request: string;
}
