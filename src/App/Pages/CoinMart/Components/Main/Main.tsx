import React from "react";

import { Card } from "@Components/Card";
import { WithLoader } from "@Components/WithLoader";
import { currencySymbols } from "@Configs/currencySymbols";
import { IMAINDATAMarket } from "@Interfaces/IMAINDATAMarket";
import { IMAINDATASearch } from "@Interfaces/IMAINDATASearch";
import { Link } from "react-router-dom";

import styleMain from "./styleMain.module.scss";

interface ICoinMarketData {
  coinmarketdata: IMAINDATAMarket;
  coinsearchdata: IMAINDATASearch;
}

const Main: React.FC<ICoinMarketData> = ({
  coinmarketdata,
  coinsearchdata,
}) => {
  const resultsdata = coinmarketdata.results;

  const selectColor = (param: number) => {
    if (param >= 0) {
      return "#21BF73";
    } else {
      return "#FB2173";
    }
  };

  return (
    <main className={styleMain.main}>
      {resultsdata[0] ? (
        resultsdata.map((coins) => (
          <Link id={coins.id} key={coins.id} to={`/coins/${coins.id}`}>
            <Card
              alt={coins.id}
              image={coins.image}
              title={coins.name}
              subtitle={coins.symbol.toUpperCase()}
              content={
                <>
                  <div>
                    {currencySymbols[coins.currency]}
                    {coins.current_price}
                  </div>
                  <div
                    style={{
                      color: selectColor(coins.price_change_percentage_24h),
                    }}
                  >
                    {coins.price_change_percentage_24h}%
                  </div>
                </>
              }
            />
          </Link>
        ))
      ) : (
        <WithLoader loading={true} children={<div>Content loading...</div>} />
      )}
    </main>
  );
};

export default Main;
