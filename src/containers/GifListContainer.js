import React, { Component } from 'react'
import GifSearch from "../components/GifSearch.js"
import GifList from "../components/GifList.js"

class GifListContainer extends Component {

  state = {
    gifs: [],
  }

  render() {
    return (
      <div>
        <GifSearch onSubmit={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

  fetchGifs = (userQuery) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${userQuery}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
    .then(response => response.json())
    .then(({data}) => {
      this.setState({
        gifs: data.map( gif => ({url: gif.images.original.url}))
      })
    })
  }

  componentDidMount(){
    this.fetchGifs()
  }
}

export default GifListContainer
