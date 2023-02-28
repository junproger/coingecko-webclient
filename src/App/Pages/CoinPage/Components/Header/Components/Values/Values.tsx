import React from "react";

import styleValues from "./styleValues.module.scss";
import { ICoinInfoData } from "../../Interface/ICoinInfoData";

const Values: React.FC<ICoinInfoData> = ({ coininfodata }) => {
  const market_cap = coininfodata?.market_data.market_cap.usd;
  const fully_diluted = coininfodata?.market_data.fully_diluted_valuation.usd;
  const circulating = coininfodata?.market_data.circulating_supply;
  const total_supply = coininfodata?.market_data.total_supply;
  const max_supply = coininfodata?.market_data.max_supply;

  return (
    <div className={styleValues.values}>
      <div className={styleValues.values__item}>
        <div className={styleValues.values__item_title}>Market Cap</div>
        <div className={styleValues.values__item_value}>{market_cap}</div>
      </div>
      <div className={styleValues.values__item}>
        <div className={styleValues.values__item_title}>
          Fully Diluted Valuation
        </div>
        <div className={styleValues.values__item_value}>{fully_diluted}</div>
      </div>
      <div className={styleValues.values__item}>
        <div className={styleValues.values__item_title}>Circulating Supply</div>
        <div className={styleValues.values__item_value}>{circulating}</div>
      </div>
      <div className={styleValues.values__item}>
        <div className={styleValues.values__item_title}>Total Supply</div>
        <div className={styleValues.values__item_value}>{total_supply}</div>
      </div>
      <div className={styleValues.values__item}>
        <div className={styleValues.values__item_title}>Max Supply</div>
        <div className={styleValues.values__item_value}>{max_supply}</div>
      </div>
    </div>
  );
};

export default Values;
