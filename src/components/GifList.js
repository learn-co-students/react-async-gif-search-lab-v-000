import React from 'react'

class GifList extends React.Component {
  renderGifs = () => {
    return this.props.gifs.map(gif => <li key={gif.id} > {gif.images.fixed_height_.url} </li>)
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderGifs}
        </ul>
      </div>
    )
  }
}

export default GifList