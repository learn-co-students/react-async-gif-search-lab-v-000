import React from 'react'

class GifList extends React.Component {

  render() {

    const showGifs = () => {
      return this.props.gifs.map(gif =>  <li key={gif.id}><img key={gif.id} src={gif.images.preview} alt={gif.title} /></li>)
    }

    return(
      <div>
      <ul>
      {showGifs()}
      </ul>
      </div>
    )
  }
}

export default GifList
