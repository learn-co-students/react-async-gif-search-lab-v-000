import React from 'react';

const GifList = (props) => {
  return (
    <div>
      <ul>
        {props.gifs.map(gif => <li key={gif.id}>{gif}</li>)}
      </ul>
    </div>
  )
}


export default GifList
