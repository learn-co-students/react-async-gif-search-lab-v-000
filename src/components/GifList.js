//<GifList /> is a presentational component. 
//It receives data from its props and renders html given the input data. It can render a top level <ul> with each gif as an <li>
import React, { Component } from 'react'
import GifListContainer from '../containers/GifListContainer'

class GifList extends Component {
  render() {
    debugger
    return (
      <ul>
        <GifListContainer 
    // {gifs.map(c => (
    //   <li>{c.body}—{c.author}</li>
    // ))}
  />
      </ul>
    )
  }
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