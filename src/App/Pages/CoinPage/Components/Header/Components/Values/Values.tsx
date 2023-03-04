import React from "react";

import { currencySymbols } from "@Configs/currencySymbols";
import { useParams } from "react-router-dom";

import styleValues from "./styleValues.module.scss";
import { ICoinInfoData } from "../../Interface/ICoinInfoData";

const Values: React.FC<ICoinInfoData> = ({ coininfodata }) => {
  const { idcurr } = useParams() as { idcurr: string };

  const market_cap = coininfodata?.market_data.market_cap[idcurr];
  const fully_diluted =
    coininfodata?.market_data.fully_diluted_valuation[idcurr];
  const circulating = coininfodata?.market_data.circulating_supply;
  const total_supply = coininfodata?.market_data.total_supply;
  const max_supply = coininfodata?.market_data.max_supply;

  return (
    <div className={styleValues.values}>
      <div className={styleValues.values__item}>
        <div className={styleValues.values__item_title}>Market Cap</div>
        <div className={styleValues.values__item_value}>
          {currencySymbols[idcurr]}
          {market_cap || 0}
        </div>
      </div>
      <div className={styleValues.values__item}>
        <div className={styleValues.values__item_title}>
          Fully Diluted Valuation
        </div>
        <div className={styleValues.values__item_value}>
          {currencySymbols[idcurr]}
          {fully_diluted || 0}
        </div>
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
