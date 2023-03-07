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
      return "card__content_change-green";
    } else {
      return "card__content_change-red";
    }
  };

  return (
    <main className={styleMain.main}>
      {resultsdata[0] ? (
        resultsdata.map((coins) => (
          <Link
            id={coins.id}
            key={coins.id}
            to={`/${coins.currency}/coins/${coins.id}`}
          >
            <Card
              alt={coins.id}
              image={coins.image}
              title={coins.name}
              subtitle={coins.symbol.toUpperCase()}
              className={selectColor(coins.price_change_percentage_24h)}
              price={
                <div>
                  {currencySymbols[coins.currency]}
                  {coins.current_price || 0}
                </div>
              }
              change={<div>{coins.price_change_percentage_24h || 0}%</div>}
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
