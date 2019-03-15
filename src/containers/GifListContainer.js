import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

  state = {
   gifs: []
 }

  componentDidMount() {
    this.getGifs
  }

  getGifs = (search) => {
    console.log(search)
    fetch('http://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=dc6zaTOxFJmzC&rating=g')
    .then(data => data.json())
    .then(({data}) => {this.setState({ gifs: data.map( gif => ({url: gif.images.original.url}))})})
  }

  render() {
    return(
      <div>
        <GifSearch getGifs={this.getGifs}/>
        <br />
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}

export default GifListContainer;
