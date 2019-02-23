import React, { Component } from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'


export default class GifListContainer extends Component {
  
  state = {
    gifList: []
  }

  componentDidMount() {
    this.fetchGifs();
  }

  fetchGifs = (query = "the office") => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(resp => resp.json())
      .then(gifs => {
        this.setState({ gifList: gifs.data.map(gif => ({url: gif.images.original.url}) ) });
      });
  }

  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifList} />
      </div>
    )
  }
}