//<GifList /> is a presentational component. 
//It receives data from its props and renders html given the input data. It can render a top level <ul> with each gif as an <li>
import React from 'react'

const GifList = props => {
  return (
    <div>
        {props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif"/>)}
    </div>
  )
}

export default GifList;

// import React from 'react';
// import GifListContainer from '../containers/GifListContainer'


// const GifList = props => 
//   <ul>
//   {props.gifs.map(gif => (
//     console.log(gif)
//     // <li>{c.body}—{c.author}</li>
//   ))}
//   </ul>
// export default GifList;