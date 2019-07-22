import React, { Component } from 'react'

class GifList extends React.Component {

  displayGifs = () => {
    if (this.props.listOfGifs.data) {
      return this.props.listOfGifs.data.map(gif => {
        return <li><img key={gif.images.original.url} src={gif.images.original.url}></img></li>
      })
    }
  }

  render() {
    return (
      <ul>{this.displayGifs()}</ul>
    )
  }

}

export default GifList
