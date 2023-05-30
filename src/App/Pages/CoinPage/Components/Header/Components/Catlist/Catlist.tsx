import React from "react";

import styleCatlist from "./styleCatlist.module.scss";
import { ICoinInfoData } from "../../Interface/ICoinInfoData";

const Catlist: React.FC<ICoinInfoData> = ({ coininfodata }) => {
  const coinsNames = coininfodata && coininfodata?.name;
  const coinsCatlist = coininfodata && coininfodata?.categories;

  return coinsCatlist ? (
    <div className={styleCatlist.catlist}>
      <div className={styleCatlist.catlist__title}>{coinsNames}</div>
      <div className={styleCatlist.catlist__dropdown}>
        Is in the lists of categories [TODO]
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Catlist;
