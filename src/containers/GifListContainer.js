import React, { Component } from 'react';

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component {

  state = {
    gifs: []
    
  }

 componentDidMount() {
  this.allGifs()
 }

 allGifs = (query) => {

  fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
  .then(res => res.json())
  .then(d => {
    this.setState({
      gifs: d.data.slice(0, 3)
    })})
}
 
 

  render() {
    return(
  <div>
   <GifList gifs={this.state.gifs} />
   <GifSearch handleGifSubmit={this.allGifs} />
  </div>
      )
  }
}

export default GifListContainer
