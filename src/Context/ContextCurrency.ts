import React from "react";

export interface IContextCurrency {
  defaultContext: {
    pagenum: number;
    pagemap: number[];
    currency: string;
    callvalue: (value: string) => void;
    callnumber: (number: number) => void;
  };
}

export const ContextCurrency = React.createContext<IContextCurrency>({
  defaultContext: {
    pagenum: 1,
    pagemap: [0, 1, 2],
    currency: "usd",
    callvalue() {
      return;
    },
    callnumber() {
      return;
    },
  },
});
