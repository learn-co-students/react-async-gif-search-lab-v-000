import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
  state = {
    gifsList: [],
    searchQuery: ''
  }

  handleSubmit = event => {
    this.setState({
      searchQuery: event
    }, function() {
      fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchQuery}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(data => {
          this.setState({
            gifsList: [data["data"][0].images.original.url, data["data"][1].images.original.url, data["data"][2].images.original.url]
          })
        })
    })
  }

  render() {
    return (
      <div>
        <GifSearch handleSubmit={this.handleSubmit}/>
        <GifList gifsList={this.state.gifsList}/>
      </div>
    )
  }
}
