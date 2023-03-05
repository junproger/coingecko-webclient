import React, { useContext, useEffect, useState } from "react";

import { ContextCurrency, IContextCurrency } from "@Context/ContextCurrency";
import { Link, useNavigate } from "react-router-dom";

import styleNavigate from "./styleNavigate.module.scss";

const Navigate: React.FC = () => {
  const navigate = useNavigate();
  const {
    defaultContext: { currency, pagenum, callnumber },
  }: IContextCurrency = useContext(ContextCurrency);

  const [getShow, setShow] = useState<boolean>(true);

  const [getPageNum, setPageNum] = useState<number[]>([
    pagenum - 1,
    pagenum + 1,
  ]);

  useEffect(() => {
    setPageNum([pagenum - 1, pagenum + 1]);
    navigate(`/${currency}/page/${pagenum}`);
  }, [currency, navigate, pagenum]);

  const handlePrev = () => {
    setShow(true);
    if (getPageNum[0] < 1) return;
    callnumber(pagenum - 1);
    setPageNum((prev) => [prev[0] - 1, prev[1] - 1]);
  };

  const handleNext = () => {
    if (getPageNum[1] >= 1230) {
      setShow(false);
      return;
    }
    callnumber(pagenum + 1);
    setPageNum((prev) => [prev[0] + 1, prev[1] + 1]);
  };

  return (
    <nav className={styleNavigate.navigate}>
      <span>All</span>
      <span>Gainer</span>
      <span>Loser</span>
      <div className={styleNavigate.navigate__arrows}>
        {getPageNum[0] ? (
          <Link
            className={styleNavigate.navigate__links}
            to={`/${currency}/page/${getPageNum[0]}`}
            onClick={handlePrev}
          >
            &lt;prev
          </Link>
        ) : (
          <span className={styleNavigate.navigate__stop}>&lt;prev</span>
        )}
        <strong>{pagenum}</strong>
        {getShow ? (
          <Link
            className={styleNavigate.navigate__links}
            to={`/${currency}/page/${getPageNum[1]}`}
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
