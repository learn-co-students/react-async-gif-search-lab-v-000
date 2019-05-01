import React from 'react';
import GifList from '../components/GifList.js';
import GifSearch from '../components/GifSearch.js';

class GifListContainer extends React.Component{

  constructor(){
    super();
    this.state ={
      images : []
    }
  }

  componentDidMount(){
    this.fetchGifs();
  }

  fetchGifs = ( query = "dolphins" ) => {
    debugger;
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(res => res.json())
        .then(({data}) => {
          this.setState({ images: data.map( gif => ({ url: gif.images.original.url }) ) })
        })
  }

  render(){
    return(
      <div>
      <GifList images={this.state.images}/>
      <GifSearch handleSubmit={this.fetchGifs}/>
      </div>
    )
  }
}

export default GifListContainer;
