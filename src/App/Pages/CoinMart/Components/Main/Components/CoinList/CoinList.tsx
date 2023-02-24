import React from "react";

import CoinItem from "../CoinItem";

const CoinList: React.FC = () => {
  return (
    <ul>
      <CoinItem />
      <CoinItem />
      <CoinItem />
    </ul>
  );
};

export default CoinList;
