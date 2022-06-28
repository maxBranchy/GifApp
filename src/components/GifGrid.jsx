import React from "react";
import { GifGridItem } from "./GifGridItem";
import "../sass/GifGrid.scss";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { data:images, loading } = useFetchGifs(category);

  return (
    <div className="grid__div">
      <h3 className="grid__title">{category}</h3>

      <div className="grid__area">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </div>
  );
};
