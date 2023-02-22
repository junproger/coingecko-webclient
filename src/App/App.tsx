import React from "react";

import { Button } from "@Components/Button";
import { Card } from "@Components/Card";
import { Loader } from "@Components/Loader";
import { WithLoader } from "@Components/WithLoader";

import styleApp from "./styleApp.module.scss";

const App: React.FC = () => {
  return (
    <div className={styleApp.app}>
      <Loader loading={true} />
      <WithLoader loading={true}>Page content</WithLoader>
      <Button loading={true} disabled>
        Cancel
      </Button>
      <Card
        alt="Bitcoin"
        image="https://www.file-extensions.org/imgs/app-icon/128/10409/bitcoin-core-icon.png"
        title="Bitcoin"
        subtitle="BTC"
      />
    </div>
  );
};

export default App;
