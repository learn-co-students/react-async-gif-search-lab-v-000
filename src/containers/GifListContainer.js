import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../compoents/GifSearch'

class GifListContainer extends Component {

  state = {
    gifs: []
  }

  render () {
    return(
      <div>
        <GifSearch fetchGIFs={this.fetchGIFs} />
        <GifList gifs ={this.state.gifs} />
      </div>
    )
  }
}
