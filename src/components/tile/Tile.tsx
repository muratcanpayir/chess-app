import React from "react";
import "./Tile.css";

interface Props {
  image?: string;
  number: number;
}

function Tile({ number, image }: Props) {
  if (number % 2 === 0) {
    return (
      <div className="tile dark-tile">
        <img src={image} />
      </div>
    );
  } else {
    return (
      <div className="tile light-tile">
        <img src={image} />
      </div>
    );
  }
}

export default Tile;
