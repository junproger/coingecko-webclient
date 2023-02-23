import React from "react";

import { CardProps } from "./propsCard";

import "./styleCard.scss";

export const Card: React.FC<CardProps> = ({
  alt = "",
  image = "",
  title = "",
  subtitle = "",
  content = "",
  onClick,
}) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card__image">
        <img className="card__image" alt={alt} src={image} />
      </div>
      <div className="card__titles">
        <h2 className="card__titles_title">{title}</h2>
        <h3 className="card__titles_subtitle">{subtitle}</h3>
      </div>
      <div className="card__content">{content}</div>
    </div>
  );
};
