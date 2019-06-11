import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
  state = {
      gifs: []
  }

  render() {
    return(
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

  fetchGifs = (search = "narwhal") => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=WLCBRKC6c3fUYVIhafMeuKL4wZ8x1bDk&q=narwhal&limit=3&offset=0&rating=G&lang=en`)
    .then(response => response.json())
    .then(({data}) => {
     this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
    })
  }

  componentDidMount() {
  this.fetchGifs()
  }

}


export default GifListContainer;
