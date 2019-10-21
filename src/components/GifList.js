import React, { Component } from "react";

class GifList extends Component {

  render() {
    return(
    <ul>
    <li>
    {this.state.gifs.map((gifimage, id) => <h1 key={id}>{gifimage.original.image.url}</h1>)}
     </li>
    </ul>
  )
  }
}

export default GifList;
