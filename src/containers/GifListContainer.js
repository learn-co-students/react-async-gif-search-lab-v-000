import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends Component {
  state = {
    topGif: []
  }


  fetchData = (term) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(({data}) => {
           this.setState({
               topGif: data.map(gif=>({url: gif.images.original.url}))
           })
       })
   }

  render() {
    return(
      <div>
        <GifSearch fetchData={this.fetchData}/>
        <br />
        <GifList gifs={this.state.topGif}/>
      </div>
    )
  }
}

export default GifListContainer;
