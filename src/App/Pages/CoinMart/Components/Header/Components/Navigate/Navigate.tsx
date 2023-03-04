import React, { useEffect, useState } from "react";

import { Link, Params, useParams } from "react-router-dom";

import styleNavigate from "./styleNavigate.module.scss";

interface INavigate {
  currenciesdata: string;
}

const Navigate: React.FC<INavigate> = ({ currenciesdata }) => {
  const { idpage } = useParams<{ [idpage in keyof Params]?: string }>();
  const pageNum = parseInt(idpage || "1", 10);

  const [getShow, setShow] = useState<boolean>(true);
  const [getCurr, setCurr] = useState<string>(currenciesdata);
  const [getPrev, setPrev] = useState<number>(pageNum - 1);
  const [getNext, setNext] = useState<number>(pageNum + 1);

  useEffect(() => {
    setCurr(currenciesdata);
    setPrev(pageNum - 1);
    setNext(pageNum + 1);
  }, [currenciesdata, pageNum]);

  const handlePrev = () => {
    setShow(true);
    if (getPrev < 1) return;
    setPrev((prev) => prev - 1);
    setNext((next) => next - 1);
  };

  const handleNext = () => {
    if (getNext >= 1231) {
      setShow(false);
      return;
    }
    setPrev((prev) => prev + 1);
    setNext((next) => next + 1);
  };

  return (
    <nav className={styleNavigate.navigate}>
      <span>All</span>
      <span>Gainer</span>
      <span>Loser</span>
      <div className={styleNavigate.navigate__arrows}>
        {getPrev ? (
          <Link
            className={styleNavigate.navigate__links}
            to={`/${getCurr}/page/${getPrev}`}
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
            to={`/${getCurr}/page/${getNext}`}
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
