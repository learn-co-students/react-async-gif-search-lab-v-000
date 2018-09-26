import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
  constructor() {
    super()

    this.state = {
      gifs: []
    }
  }
  
  
  render() {
    return (
      <div class='clearfix'>
        <GifSearch handleSubmit={this.handleSubmit.bind(this)} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

  handleSubmit = (event, formData) => {
    event.preventDefault()

    this.fetchGIFs(`http://api.giphy.com/v1/gifs/search?q=${formData.query}&api_key=dc6zaTOxFJmzC&rating=g`)
  }

  fetchGIFs = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(gifs => {
        this.setState({gifs: gifs.data.slice(0, 3).map(gif => gif.images.original.url)})
      })
  }
}