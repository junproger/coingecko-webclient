import React from "react";

import { WithLoader } from "@Components/WithLoader";

import styleMain from "./styleMain.module.scss";
import { ICoinInfoData } from "../Header/Interface/ICoinInfoData";

const Main: React.FC<ICoinInfoData> = ({ coininfodata }) => {
  const description = coininfodata && coininfodata.description;

  return description ? (
    <main className={styleMain.main}>
      <h3 className={styleMain.main__title}>Description</h3>
      <div
        className={styleMain.main__text}
        dangerouslySetInnerHTML={{ __html: description["en"] }}
      />
    </main>
  ) : (
    <WithLoader loading={true} children={<div>Content loading...</div>} />
  );
};

export default Main;
