//the <GifListContainer /> will be responsible for fetching the data
//from the giphy api, storing the first 3 gifs from the response in it's
//component state, and passing that data down to it's child the <GifList>
//component as a prop.
//It will also render a <GifSearch /> component that renders the form.
//<GifListContainer /> should pass down a submit handler function to <GifSearch />
//as a prop.
import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

  constructor(){
    super();
    this.state = {
      gifs: []
    }
  }

  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

  fetchGifs = (query) => {
    try{
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          gifs: data.data.slice(0, 3)
        })
      })
    } catch(e){
      console.error(e)
    }
  }
}
