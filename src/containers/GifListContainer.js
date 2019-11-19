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
  componentDidMount() {
     this.fetchGIF()
  }

  fetchGIF = (query) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
    .then(res => res.json())
    .then(json => this.setState({
      gifs: json.data.map(gif => gif.images.original.url)
    }))
  }
  render(){
    return(
      <div>
      <GifList gifs={this.state.gifs} />
      <GifSearch fetch={this.fetchGIF} />
      </div>
    )
  }

}
