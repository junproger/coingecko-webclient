import React, { useState } from "react";

import { Link, useParams } from "react-router-dom";

import styleNavigate from "./styleNavigate.module.scss";

const Navigate: React.FC = () => {
  const { idpage } = useParams<{ idpage: string }>();
  const pageNum = parseInt(idpage || "1", 10);

  const [getPrev, setPrev] = useState<number>(pageNum - 1);
  const [getNext, setNext] = useState<number>(pageNum + 1);

  const handlePrev = () => {
    if (getPrev < 1) return;
    setPrev((prev) => prev - 1);
    setNext((next) => next - 1);
  };

  const handleNext = () => {
    if (getNext > 1232) return;
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
            to={`/${getPrev}`}
            onClick={handlePrev}
          >
            &lt;prev
          </Link>
        ) : (
          <span>&lt;prev</span>
        )}
        <strong>{pageNum}</strong>
        <Link
          className={styleNavigate.navigate__links}
          to={`/${getNext}`}
          onClick={handleNext}
        >
          next&gt;
        </Link>
      </div>
    </nav>
  );
};

export default Navigate;
