import React from "react";

import { Card } from "@Components/Card";
import { WithLoader } from "@Components/WithLoader";
import { useFetchCoinMart } from "@Hooks/useFetchCoinMart";
import { Link } from "react-router-dom";

import styleMain from "./styleMain.module.scss";

const Main: React.FC = () => {
  const CoinMart = useFetchCoinMart();

  const selectColor = (param: number) => {
    if (param >= 0) {
      return "#21BF73";
    } else {
      return "#FB2173";
    }
  };

  return (
    <main className={styleMain.main}>
      {CoinMart[0] ? (
        CoinMart.map((coins) => (
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
        <WithLoader loading={true} children={<div>Coinmart loading...</div>} />
      )}
    </main>
  );
};

export default Main;
