import React from "react";

import { WithLoader } from "@Components/WithLoader";

import styleMain from "./styleMain.module.scss";

interface IDescrption {
  description: string | "";
}

const Main: React.FC<IDescrption> = ({ description }) => {
  return description ? (
    <main className={styleMain.main}>
      <h3 className={styleMain.main__title}>Description</h3>
      <div
        className={styleMain.main__text}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </main>
  ) : (
    <WithLoader loading={true} children={<div>Content loading...</div>} />
  );
};

export default Main;
