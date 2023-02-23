import React from "react";

import { CardProps } from "./propsCard";
import styleCard from "./styleCard.module.scss";

export const Card: React.FC<CardProps> = ({
  alt = "",
  image = "",
  title = "",
  subtitle = "",
  content = "",
  onClick,
}) => {
  return (
    <div className={styleCard.card} onClick={onClick}>
      <div className={styleCard.card__image}>
        <img className={styleCard.card__image} alt={alt} src={image} />
      </div>
      <div className={styleCard.card__titles}>
        <h2 className={styleCard.card__titles_title}>{title}</h2>
        <h3 className={styleCard.card__titles_subtitle}>{subtitle}</h3>
      </div>
      <div className={styleCard.card__content}>{content}</div>
    </div>
  );
};
