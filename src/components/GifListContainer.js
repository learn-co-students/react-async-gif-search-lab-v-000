import React, { Component } from 'react';

import GifList from './GifList'
import GifSearch from './GifSearch'


class GifListContainer extends Component {

  constructor(){
    super()

    this.state = {
      gifUrls: []
    }
  }

  render(){
    return(
      <div className='GifListContainer'>
        <GifList />
        <GifSearch />
      </div>
      )
  }

  fetchGifUrls = (searchTerm) => {
    let thisContainer = this
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        const gifUrls = myJson.data.map(obj => obj.url)
        thisContainer.setState({ gifUrls: gifUrls })
      });
  }

}

export default GifListContainer
