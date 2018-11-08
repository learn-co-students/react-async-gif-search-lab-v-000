import React from 'react';

const GifList = (props) => {
  console.log(props)
  return(
    <ul>
      {props.gifs.map(gif => <li><img src={gif.url} key={gif.url} alt={gif.url}/></li>)}
    </ul>
  )
}

export default GifList
