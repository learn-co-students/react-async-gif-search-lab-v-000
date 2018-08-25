import React from 'react'

export default class GifList extends React.Component {
  render() {
    return (
      <div>
        {this.props.gifs.map(gif => <img kye={gif.url} src={gif.url} alt="gif"></img>)}
      </div>
    )
  }
}
