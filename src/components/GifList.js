import React, { Component } from 'react'

class GifList extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.gifs.map(
            (gif, index) => <li key={index}><img src={gif.url} alt={gif.url}/></li>
          )}
        </ul>

      </div>
    )
  }
}

export default GifList
