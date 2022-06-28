import React from "react";
import "../sass/GifGridItem.scss";

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="item__container">
      <p className="item__title">{title}</p>
      <figure className="item__picture">
        <img className="item__img" src={url} alt={title} />
      </figure>
    </div>
  );
};
