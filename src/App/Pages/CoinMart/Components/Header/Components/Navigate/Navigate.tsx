import React, { useContext, useState } from "react";

import { ContextCurrency, IContextCurrency } from "@Context/ContextCurrency";
import { Link } from "react-router-dom";

import styleNavigate from "./styleNavigate.module.scss";

const Navigate: React.FC = () => {
  const {
    defaultContext: { currency, pagemap },
  }: IContextCurrency = useContext(ContextCurrency);

  const [getShow, setShow] = useState<boolean>(true);

  const handlePrev = () => {
    setShow(true);
    if (pagemap[0] < 1) return;
  };

  const handleNext = () => {
    if (pagemap[2] >= 1230) {
      setShow(false);
    }
  };

  return (
    <nav className={styleNavigate.navigate}>
      <span>All</span>
      <span>Gainer</span>
      <span>Loser</span>
      <div className={styleNavigate.navigate__arrows}>
        {pagemap[0] ? (
          <Link
            className={styleNavigate.navigate__links}
            to={`/${currency}/pages/${pagemap[0]}`}
            onClick={handlePrev}
          >
            &lt;prev
          </Link>
        ) : (
          <span className={styleNavigate.navigate__stop}>&lt;prev</span>
        )}
        <strong>{pagemap[1]}</strong>
        {getShow ? (
          <Link
            className={styleNavigate.navigate__links}
            to={`/${currency}/pages/${pagemap[2]}`}
            onClick={handleNext}
          >
            next&gt;
          </Link>
        ) : (
          <span className={styleNavigate.navigate__stop}>next&gt;</span>
        )}
      </div>
    </nav>
  );
};

export default Navigate;
