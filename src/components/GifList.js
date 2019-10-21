import React, { Component } from "react";

class GifList extends Component {

  render() {
    return(
    <ul>
    <li>
    {this.props.gifs.map((url, id) => <img src={url} key={id}></img>)}
     </li>
    </ul>
  )
  }
}

export default GifList;
