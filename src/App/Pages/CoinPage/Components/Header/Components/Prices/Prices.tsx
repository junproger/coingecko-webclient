import React from "react";

import { currencySymbols } from "@Configs/currencySymbols";
import { useParams } from "react-router-dom";

import stylePrices from "./stylePrices.module.scss";
import { ICoinInfoData } from "../../Interface/ICoinInfoData";

const Prices: React.FC<ICoinInfoData> = ({ coininfodata }) => {
  const coinsPrices = coininfodata && coininfodata?.market_data;

  const { idcurr } = useParams<{ idcurr: string }>();
  const dataCurr = idcurr || "usd";

  const current_price = coinsPrices?.current_price;
  const price_change = coinsPrices?.price_change_percentage_24h;

  const selectColor = (param: number | undefined) => {
    if (param && param >= 0) {
      return "prices__changes_up";
    } else {
      return "prices__changes_down";
    }
  };

  return coinsPrices ? (
    <div className={stylePrices.prices}>
      <div className={stylePrices.prices__current}>
        {currencySymbols[dataCurr]}
        {current_price[dataCurr] || 0}
      </div>
      <div className={stylePrices[selectColor(price_change)]}>
        {price_change || 0}%
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Prices;
