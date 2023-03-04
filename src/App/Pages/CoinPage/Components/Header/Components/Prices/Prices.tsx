import React from "react";

import { Loader, LoaderSize } from "@Components/Loader";
import { currencySymbols } from "@Configs/currencySymbols";
import { useParams } from "react-router-dom";

import stylePrices from "./stylePrices.module.scss";
import { ICoinInfoData } from "../../Interface/ICoinInfoData";

const Prices: React.FC<ICoinInfoData> = ({ coininfodata }) => {
  const { idcurr } = useParams() as { idcurr: string };

  const current_price = coininfodata?.market_data.current_price[idcurr];
  const percentage_24h = coininfodata?.market_data.price_change_percentage_24h;

  const selectColor = (param: number | undefined) => {
    if (param && param >= 0) {
      return "prices__changes_up";
    } else {
      return "prices__changes_down";
    }
  };

  return coininfodata?.id ? (
    <div className={stylePrices.prices}>
      <div className={stylePrices.prices__current}>
        {currencySymbols[idcurr]}
        {current_price || 0}
      </div>
      <div className={stylePrices[selectColor(percentage_24h)]}>
        {percentage_24h}%
      </div>
    </div>
  ) : (
    <Loader loading={true} size={LoaderSize.m} />
  );
};

export default Prices;
