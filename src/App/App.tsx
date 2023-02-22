import React from "react";

import { Loader } from "@Components/Loader";

import styleApp from "./styleApp.module.scss";

const App: React.FC = () => {
  return (
    <div className={styleApp.app}>
      <Loader loading={true} />
    </div>
  );
};

export default App;
