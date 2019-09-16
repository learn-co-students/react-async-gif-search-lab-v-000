import React, { Component } from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

  state = {
    images: []
  }

  getImages = (search) => {
    let images = [];
    fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json())
    .then(data => { 
      const imagesArray = data.data;
      [0,1,2].forEach(i => {
        images[i] = imagesArray[i].images.original.url;
      });
      this.setState({ images: images });
    });
  }

  onSubmit = (query) => {
    console.log("Event: " + query);
    this.getImages(query);
  }


  componentDidMount() {
    this.getImages('kittens');
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
