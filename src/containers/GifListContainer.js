import React, {Component} from 'react';

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

  state = {
    gifs = []
  }

  componentDidMount() {
    this.searchGifs()
  }

  searchGifs = (search = "x") => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp => resp.json())
    .then(json => this.setState({gifs: json}))
  }

  render() {
    return(
      <div>
      <GifList gifs={this.state.gifs} />
      <GifSearch searchGifs={this.searchGifs} />
      </div>
    )
  }
}

export default GifListContainer
