import React from 'react'
import './GifList.css';



const GifList = (props) => {




  return (
    <div id="left">
      <ul>
        <li><img src={props.gifs[0]} alt= "" height="200" width="200" /></li><br />
        <li><img src={props.gifs[1]} alt= "" height="200" width="200" /></li><br />
        <li><img src={props.gifs[2]} alt= "" height="200" width="200" /></li>
      </ul>
    </div>
  )
}

export default GifList
