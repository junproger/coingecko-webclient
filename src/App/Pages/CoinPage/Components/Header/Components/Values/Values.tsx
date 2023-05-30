import React from "react";

import { Loader, LoaderSize } from "@Components/Loader";
import { currenciesSymbols } from "@Configs/currenciesSymbols";
import { useParams } from "react-router-dom";

import styleValues from "./styleValues.module.scss";
import { ICoinInfoData } from "../../Interface/ICoinInfoData";

const Values: React.FC<ICoinInfoData> = ({ coininfodata }) => {
  const coinsValues = coininfodata && coininfodata?.market_data;
  const { idcurr } = useParams<{ idcurr: string }>();
  const dataCurr = idcurr || "usd";

  const market_cap = coinsValues?.market_cap;
  const fully_diluted = coinsValues?.fully_diluted_valuation;
  const circulating = coinsValues?.circulating_supply;
  const total_supply = coinsValues?.total_supply;
  const max_supply = coinsValues?.max_supply;

  return coinsValues ? (
    <div className={styleValues.values}>
      <div className={styleValues.values__item}>
        <div className={styleValues.values__item_title}>Market Cap</div>
        <div className={styleValues.values__item_value}>
          {currenciesSymbols[dataCurr]}
          {market_cap[dataCurr] || 0}
        </div>
      </div>
      <div className={styleValues.values__item}>
        <div className={styleValues.values__item_title}>
          Fully Diluted Valuation
        </div>
        <div className={styleValues.values__item_value}>
          {currenciesSymbols[dataCurr]}
          {fully_diluted[dataCurr] || 0}
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
  ) : (
    <Loader loading={true} size={LoaderSize.m} />
  );
};

export default Values;
