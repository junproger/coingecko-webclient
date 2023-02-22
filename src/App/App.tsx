import React from "react";

import { Button } from "@Components/Button";
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
    </div>
  );
};

export default App;
