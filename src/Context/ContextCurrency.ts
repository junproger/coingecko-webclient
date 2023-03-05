import React from "react";

export interface IContextCurrency {
  defaultContext: {
    pagenum: number;
    currency: string;
    callbacks: (value: string) => void;
  };
}

export const ContextCurrency = React.createContext<IContextCurrency>({
  defaultContext: {
    pagenum: 1,
    currency: "usd",
    callbacks() {
      return;
    },
  },
});
