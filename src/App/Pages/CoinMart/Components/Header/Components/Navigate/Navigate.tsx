import React, { useContext, useEffect, useState } from "react";

import { ContextCurrency, IContextCurrency } from "@Context/ContextCurrency";
import { Link, useNavigate } from "react-router-dom";

import styleNavigate from "./styleNavigate.module.scss";

const Navigate: React.FC = () => {
  const navigate = useNavigate();
  const {
    defaultContext: { currency, pagenum, pagemap, callnumber },
  }: IContextCurrency = useContext(ContextCurrency);

  const [getShow, setShow] = useState<boolean>(true);

  useEffect(() => {
    navigate(`/${currency}/page/${pagenum}`);
  }, [currency, navigate, pagenum]);

  const handlePrev = () => {
    setShow(true);
    if (pagemap[0] < 1) return;
    callnumber(pagenum - 1);
  };

  const handleNext = () => {
    if (pagemap[2] >= 1230) {
      setShow(false);
      return;
    }
    callnumber(pagenum + 1);
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
            to={`/${currency}/page/${pagemap[0]}`}
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
            to={`/${currency}/page/${pagemap[2]}`}
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
