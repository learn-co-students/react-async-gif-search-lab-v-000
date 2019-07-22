import React, { Component } from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

  state = {
    gifs: []
  }

  fetchGifs = (query) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(response => response.json())
      .then(gifs => this.setState({ gifs }))
  }

  render() {


    return(
      <div className="gif list container">
        < GifList listOfGifs={this.state.gifs} />
        < GifSearch searchGifs={this.fetchGifs} />
      </div>
    )

  }

}

export default GifListContainer
