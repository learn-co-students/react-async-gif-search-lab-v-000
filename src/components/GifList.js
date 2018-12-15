import React from 'react';

const GifList = (props) => {
  console.log(props)

  return (

    <ul>
      {props.gifs.map((gif, index) => <img key={index} src={gif.url}/>)}
    </ul>
  )
}

export default GifList;