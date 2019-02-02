import React, { Component } from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
  state = {
    firstThreeGifs: []
  }

  render() {
    return (
      <div className="row">
          < GifList firstThreeGifs={this.state.firstThreeGifs} />
          < GifSearch fetchGifs={this.fetchGifs} />
      </div>
    )
  }

  fetchGifs = (query) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        firstThreeGifs: data.data.slice(0,3).map( e => ({
          url: e.images.original.url
        }))
      });
      console.log(this.state.firstThreeGifs)
    })
  }

  componentDidMount() {
    this.fetchGifs();
  }
}

export default GifListContainer
