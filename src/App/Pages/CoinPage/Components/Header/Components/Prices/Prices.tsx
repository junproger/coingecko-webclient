import React from "react";

import { Loader, LoaderSize } from "@Components/Loader";

import stylePrices from "./stylePrices.module.scss";
import { ICoinInfoData } from "../../Interfaces/ICoinInfoData";

const Prices: React.FC<ICoinInfoData> = ({ coininfodata }) => {
  const current_price = coininfodata?.market_data.current_price.usd;
  const percentage_24h = coininfodata?.market_data.price_change_percentage_24h;

  const selectColor = (param: number | undefined) => {
    if (param && param >= 0) {
      return "#21BF73";
    } else {
      return "#FB2173";
    }
  };

  return coininfodata?.id ? (
    <div className={stylePrices.prices}>
      <div className={stylePrices.prices__current}>${current_price}</div>
      <div
        className={stylePrices.prices__changes}
        style={{
          color: selectColor(percentage_24h),
        }}
      >
        {percentage_24h}%
      </div>
    </div>
  ) : (
    <Loader loading={true} size={LoaderSize.m} />
  );
};

export default Prices;
