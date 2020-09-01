// a presentational component. 
// It receives data from its props and renders html given the input data. 
// It can render a top level <ul> with each gif as an <li>.
import React from 'react';

const GifList = props => {
  return(
    <ul>
      {props.gifs.map((gif, index) => 
        <li key={index}>
          <img src={gif.images.original.url} alt=""/>
        </li>
      )}
    </ul>
  )
}

export default GifList