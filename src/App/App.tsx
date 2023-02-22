import React from "react";

import Greet from "./Pages/Greet";
import styleApp from "./styleApp.module.scss";

const App: React.FC = () => {
  return (
    <div className={styleApp.app}>
      <Greet />
    </div>
  );
};

export default App;
