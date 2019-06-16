
import React, { Component } from 'react';

import GifList from './GifList'
import GifSearch from './GifSearch'

class GifListContainer extends Component {

  constructor(){
    super()
    this.state = {
         gifs: []
     }
  }

  fetchGifs = (query) => {
     fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
       .then(response => response.json())
       .then(({data}) => this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) }))
   }

     // i tried hitting it with a proxy and that didn't help.
     // i tried setting request options in my fetch below and that still led me to the same problems

// fetchGifs = query => {
//   let url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`
//       return fetch(url, {
//           method: 'GET',
//           mode: 'no-cors',
//          'Access-Control-Allow-Origin':'*',
//       })
//       .then(response => response.json())
//       .then(({data}) => this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) }))
//   }


  render() {
    return (
      <div>
        <GifList gifs={this.state.gifs}/>
        <GifSearch handleSearch={this.fetchGifs}/>
      </div>
    );
  }

}

export default GifListContainer;
