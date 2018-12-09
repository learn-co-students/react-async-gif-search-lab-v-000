import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gifs: []
    }
  }

  fetchGif = (query) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(response => response.json())
    .then(({data}) => {
      this.setState({ gifs: data.map(gif => ({ url: gif.images.original.url }) ) })
    })
  }

  componentDidMount() {
    this.fetchGif()
  }

  render() {
    return (
        <div>
          <GifSearch fetchGif={this.fetchGif}/>
          <GifList gifs={this.state.gifs}/>
        </div>
    )
  }
}

export default GifListContainer
