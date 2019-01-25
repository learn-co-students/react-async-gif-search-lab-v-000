import React from 'react';

const GifList = props => {
  return (
  	<ul>
  	  {props.gifsArray.map(gifObject => <li key={gifObject.url}><img src={gifObject.url} alt="gif" /></li>)}
  	</ul>
  )
}

export default GifList;
// GifList is a presentational component.
// GifList stores an arrow function that accepts a props parameter 
// GifList receives data from its props and renders html given the input data. 
// GifList renders a top level <ul> with each gif as an <li> containing an <img>.