import React, { Component } from 'react';

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'
class GifListContainer extends Component {

  state = {
      gifs: []
  }

  fetchGifs = (searchTerm) => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=nd18ePpFIYZSd4IXCFaOgAukr9EfBbw7=${searchTerm}&limit=3&offset=0&rating=g&lang=en`)
    .then(response => response.json())
    .then(gifs => {
      this.setGifs(gifs.data)
    })
  }

  setGifs = (gifs) => {
    this.setState({
      gifs: gifs
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.fetchGifs(event.target.searchTerm.value)
  }

  render() {
    return(
      <div className="container">
        <GifSearch handleSubmit={this.handleSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}

export default GifListContainer