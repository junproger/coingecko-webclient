import React, { useContext, useEffect, useState } from "react";

import { Link, Params, useParams, useNavigate } from "react-router-dom";

import {
  ContextCurrency,
  IContextCurrency,
} from "./../../../../../../../Context";
import styleNavigate from "./styleNavigate.module.scss";

const Navigate: React.FC = () => {
  const navigate = useNavigate();
  const {
    defaultContext: { currency },
  }: IContextCurrency = useContext(ContextCurrency);

  const { idpage } = useParams<{ [idpage in keyof Params]?: string }>();
  const pageNum = parseInt(idpage || "1", 10);

  const [getShow, setShow] = useState<boolean>(true);

  const [getPageNum, setPageNum] = useState<number[]>([
    pageNum - 1,
    pageNum + 1,
  ]);

  useEffect(() => {
    navigate(`/${currency}/page/${pageNum}`);
    setPageNum([pageNum - 1, pageNum + 1]);
  }, [currency, navigate, pageNum]);

  const handlePrev = () => {
    setShow(true);
    if (getPageNum[0] < 1) return;
    setPageNum((prev) => [prev[0] - 1, prev[1] - 1]);
  };

  const handleNext = () => {
    if (getPageNum[1] >= 1230) {
      setShow(false);
      return;
    }
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
        <strong>{pageNum}</strong>
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
