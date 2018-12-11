import React from 'react'

const GifList  = props => {
  console.log(props);
  return (
    <div>
    <ul>
    {props.gifs.map(gif =>
      <li><img src={gif.gif} alt="pic"/></li> )}
    </ul>
    </div>
  )
}

export default GifList
