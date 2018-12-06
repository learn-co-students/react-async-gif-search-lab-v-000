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
        <div>
          <GifSearch handleSearch={this.handleSearch} />
        </div>
        <div>
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    )
  }

  handleSearch = (searchVal) => {
    fetch('http://api.giphy.com/v1/gifs/search?q=' + searchVal + '&api_key=dc6zaTOxFJmzC&rating=g')
    .then(response => response.json())
    .then((data) => {this.setState({gifs: data.data.map(gif => gif.images.original.url)})})
  }

}
