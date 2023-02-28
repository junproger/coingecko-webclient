import React from "react";

import { Loader, LoaderSize } from "@Components/Loader";
import { Link } from "react-router-dom";

import styleTitles from "./styleTitles.module.scss";
import { ICoinInfoData } from "../../Interface/ICoinInfoData";

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
      {coininfodata?.id ? (
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
      ) : (
        <Loader loading={true} size={LoaderSize.s} />
      )}
      <div className={styleTitles.titles__star}>
        <svg
          width="17"
          height="15"
          viewBox="0 0 17 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.41143 2.2934L9.98857 5.12463L10.2514 5.63202L10.8229 5.70813L14.3429 6.1597L11.84 8.34148L11.4114 8.71187L11.5143 9.21926L12.1143 12.3296L8.96571 10.8632L8.41143 10.6552L7.88 10.9038L4.73143 12.3499L5.30286 9.23956L5.40571 8.73217L4.98286 8.34148L2.45714 6.13434L5.97714 5.68276L6.54857 5.60665L6.81143 5.09926L8.41143 2.2934ZM8.41143 0L5.81143 4.67813L0 5.42399L4.20571 9.06705L3.21143 14.2069L8.41143 11.7816L13.6114 14.2069L12.6171 9.06705L16.8229 5.42906L11.0114 4.67813L8.41143 0Z"
            fill="#343A40"
          />
        </svg>
      </div>
    </div>
  );
};

export default Titles;
