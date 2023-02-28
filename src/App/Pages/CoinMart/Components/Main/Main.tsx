import React from "react";

import { Card } from "@Components/Card";
import { WithLoader } from "@Components/WithLoader";
import { loging } from "@Utils/loging";
import { Link } from "react-router-dom";
import { ICoinsMarketApiNorm } from "src/Interfaces/ICoinsMarketApiNorm";
import { ISearchCoinsApiNorm } from "src/Interfaces/ISearchCoinsApiNorm";

import styleMain from "./styleMain.module.scss";

interface ICoinMarketData {
  coinmarketdata: ICoinsMarketApiNorm[];
  coinsearchdata: ISearchCoinsApiNorm[];
}

const Main: React.FC<ICoinMarketData> = ({
  coinmarketdata,
  coinsearchdata,
}) => {
  loging(coinsearchdata);
  const selectColor = (param: number) => {
    if (param >= 0) {
      return "#21BF73";
    } else {
      return "#FB2173";
    }
  };

  return (
    <main className={styleMain.main}>
      {coinmarketdata[0] ? (
        coinmarketdata.map((coins) => (
          <Link id={coins.id} key={coins.id} to={`/coins/${coins.id}`}>
            <Card
              alt={coins.id}
              image={coins.image}
              title={coins.name}
              subtitle={coins.symbol.toUpperCase()}
              content={
                <>
                  <div>${coins.current_price}</div>
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
