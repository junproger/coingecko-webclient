export interface IQueryConcept {
  uipath: string;
  nquery: string;
  tquery: string;
  dquery: string;
  origin: string;
  apiver: string;
  apidoc: string;
  target: string;
  getapi: string;
  params: string;
  request: string;
  queryHandle: {
    baseUrl: null;
    basePage: null;
    startUrl: null;
    startPage: null;
    currentUrl: null;
    currentPage: null;
    nextUrl: null;
    nextPage: null;
    prevUrl: null;
    prevPage: null;
    endUrl: null;
    endPage: null;
  };
}
