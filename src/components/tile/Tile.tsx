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
        {image && (
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="chess-piece"
          ></div>
        )}
      </div>
    );
  } else {
    return (
      <div className="tile light-tile">
        {image && (
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="chess-piece"
          ></div>
        )}
      </div>
    );
  }
}

export default Tile;
