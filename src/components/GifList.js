// Entire file --> Meg code
import React, { Component } from 'react'

export default class GifList extends Component {
  render() {
    const gifs = this.props.searchData.gifs
    const desc = this.props.searchData.searchTerm
    console.log(this.props)

    return(
      <div>
        <ul>
          {gifs && gifs.map((gif, idx) => 
            <li key={idx}>
              <img src={gif.url} alt={desc} width={gif.width} height={gif.height} />
            </li>
          )}
        </ul>
      </div>
    )
  }
}