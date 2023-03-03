import React from "react";

import classNames from "classnames";

import { CardProps } from "./propsCard";
import styleCard from "./styleCard.module.scss";

export const Card: React.FC<CardProps> = ({
  alt = "",
  image = "",
  title = "",
  subtitle = "",
  price = "",
  change = "",
  className = "",
  onClick,
}) => {
  const cardClasses = classNames(styleCard[className]);
  return (
    <div className={styleCard.card} onClick={onClick}>
      <div className={styleCard.card__image}>
        <img className={styleCard.card__image} alt={alt} src={image} />
      </div>
      <div className={styleCard.card__titles}>
        <h2 className={styleCard.card__titles_title}>{title}</h2>
        <h3 className={styleCard.card__titles_subtitle}>{subtitle}</h3>
      </div>
      <div className={styleCard.card__content}>
        <div className={styleCard["card__content_price-grey"]}>{price}</div>
        <div className={cardClasses}>{change}</div>
      </div>
    </div>
  );
};
