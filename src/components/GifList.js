import React, { Component } from 'react'

export default class GifList extends Component {

  render() {
    const resultGifs = this.props.results.map(gif => gif.images.original.url)
    return (
      <ul>
      {resultGifs.map(gif =>
        <li>
          <img src={gif} />
        </li>
      )}
      </ul>

    )
  }

}
