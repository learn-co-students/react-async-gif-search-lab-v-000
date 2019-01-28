import React, {Component} from 'react';
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

export default class GifListContainer extends Component{
  state = {
    gifs : []
  }

  render(){
    return(
      <div>
        <GifList gifs={this.state.gifs} />
        <GifSearch onSearchSubmit={this.onSearchSubmit} />
      </div>
    )
  }

  onSearchSubmit = (query) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json())
    .then(gifs => {
      this.setState({
        gifs: gifs.map(gif => ({url: gif.images.original.url}))
      })
    })
  }

  componentDidMount() {
    this.onSearchSubmit()
  }
}
