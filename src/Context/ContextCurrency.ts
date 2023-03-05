import React from "react";

export interface IContextCurrency {
  defaultContext: {
    pagenum: number;
    pagemap: {
      pageprev: number;
      pagefact: number;
      pagenext: number;
    };
    currency: string;
    callvalue: (value: string) => void;
    callnumber: (number: number) => void;
  };
}

export const ContextCurrency = React.createContext<IContextCurrency>({
  defaultContext: {
    pagenum: 1,
    pagemap: {
      pageprev: 0,
      pagefact: 1,
      pagenext: 2,
    },
    currency: "usd",
    callvalue() {
      return;
    },
    callnumber() {
      return;
    },
  },
});
