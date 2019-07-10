import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
  state = {
    gifs: [],
    searchQuery: ''
  }

handleSubmit = event => {
  this.setState({
    searchQuery: event
  }, function () {
    fetch(`http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        gifs: data.data.slice(0,3).map((gif) => {
          return gif.images.original.url
        })
      })
    })
  })
}

    render() {
      return (
        <div>
        <GifSearch handleSubmit={this.handleSubmit} />
        <GifList gifs={this.state.gifs} />
        </div>
      )
    }
}

export default GifListContainer
