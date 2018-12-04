import React, { Component } from 'react';

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifs: []
    }
  }


  render() {
    return (
      <div>
        GifListContainer!
        <GifSearch sendSearchQuery={this.getSearchQuery}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }

  componentDidMount() {
    this.getSearchQuery()
  }

  getSearchQuery = (query = "happy") => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp => resp.json())
    .then(({data}) => {
      this.setState({ gifs: data.map(gif => ({ url: gif.images.original.url }) ) })
    })
  }

}

export default GifListContainer
