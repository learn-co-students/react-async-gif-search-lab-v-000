import React, { Component } from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

  state = {
    images: []
  }

  onSubmit(event) {
    let images = [];
    
    fetch('http://api.giphy.com/v1/gifs/search?q=puppies&api_key=dc6zaTOxFJmzC&rating=g')
    .then(res => res.json())
    .then(data => { 
      const imagesArray = data.data;
      [0,1,2].forEach(i => {
        images[i] = imagesArray[i].images.original.url;
      });
      this.setState({ images: images });
    });
  }


  componentDidMount() {
    let images = [];
    fetch('http://api.giphy.com/v1/gifs/search?q=dolphin&api_key=dc6zaTOxFJmzC&rating=g')
    .then(res => res.json())
    .then(data => { 
      const imagesArray = data.data;
      [0,1,2].forEach(i => {
        images[i] = imagesArray[i].images.original.url;
      });
      this.setState({ images: images });
    });
  }

  render() {
    return(
      <div>
      < GifList images={this.state.images} />
      < GifSearch onSubmit={this.onSubmit} />
      </div>
    )
    
    
  }



}

export default GifListContainer
