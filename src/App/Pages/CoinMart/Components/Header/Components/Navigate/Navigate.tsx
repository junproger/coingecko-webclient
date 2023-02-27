import React from "react";

import styleNavigate from "./styleNavigate.module.scss";

const Navigate: React.FC = () => {
  return (
    <nav className={styleNavigate.navigate}>
      <span>All</span>
      <span>Gainer</span>
      <span>Loser</span>
      <div className={styleNavigate.navigate__arrows}>
        <span>&lt; Prev</span>
        <span>Next &gt;</span>
      </div>
    </nav>
  );
};

export default Navigate;
