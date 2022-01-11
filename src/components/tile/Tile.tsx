import React from 'react'
import "./Tile.css";

interface Props{
  number:number
}

function Tile({number}:Props) {
  if(number%2===0){
    return <div className='tile dark-tile'></div>
  }
  else{
    return <div className='tile light-tile'></div>
  }

}

export default Tile
