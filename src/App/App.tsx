import React from "react";

import Greet from "./Pages/Greet";

import "./styleApp.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Greet />
    </div>
  );
};

export default App;
