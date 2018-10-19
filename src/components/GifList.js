import React, { Component } from 'react'
import GifSearch from "./GifSearch";

class GifList extends Component {

  render() {
    return (
      <div>
          {this.props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif"/>)}
      </div>
    )
  }

}

export default GifList
