import React from "react";

import { Link } from "react-router-dom";

import styleTitles from "./styleTitles.module.scss";
import { ICoinInfoData } from "../../Interfaces/ICoinInfoData";

const Titles: React.FC<ICoinInfoData> = ({ coininfodata }) => {
  return (
    <div className={styleTitles.titles}>
      <div className={styleTitles.titles__link}>
        <Link to={"/"}>
          <svg
            width="10"
            height="15"
            viewBox="0 0 10 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.33333 1.25731L7.92976 0L0 7.10345L7.92976 14.2069L9.33333 12.9496L2.80714 7.10345L9.33333 1.25731Z"
              fill="#212529"
            />
          </svg>
        </Link>
      </div>
      <div className={styleTitles.titles__coins}>
        <div className={styleTitles.titles__coins_icon}>
          <img
            className={styleTitles.titles__coins_image}
            alt={coininfodata?.name}
            src={coininfodata?.image.thumb}
          />
        </div>
        <div className={styleTitles.titles__coins_title}>
          {coininfodata?.name}
        </div>
        <div className={styleTitles.titles__coins_subtitle}>
          ({coininfodata?.symbol.toUpperCase()})
        </div>
      </div>
      <div className="star"></div>
    </div>
  );
};

export default Titles;
