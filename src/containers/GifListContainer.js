import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {
  state = {
    gifs: []
  }

  render() {
    return(
			<div>
        <GifSearch getGifs={this.getGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

  componentDidMount(searchTerm) {
    this.getGifs()
  }

  getGifs(searchTerm) {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(resp => resp.json())
      .then(({data}) => {
        this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
      })
  }
}

export default GifListContainer