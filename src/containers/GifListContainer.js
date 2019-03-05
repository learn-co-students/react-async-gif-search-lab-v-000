import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
  
  state = {
    gifs: []
  }
  
  render() {
    return (
      <div>
      <GifSearch fetchGIFS={this.fetchGIFS} />
      <GifList gifs={this.state.gifs} />
      </div>
      )
  }
  
  fetchGIFS = (query = "dolphins") => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json())
    .then(({data}) => {
      this.setSate({gifs: data.maap( gif +> ({url: gif.images.original.url }) ) })
    })
  }
  
  componentDidMount() {
    this.fetchGIFS()
  }
}