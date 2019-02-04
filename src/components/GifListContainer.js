import React, {Component} from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

export default class GifListContainer extends Component {
  constructor() {
    super()
    this.state = {
      gifList : []
    }
  }

  searchHandle = (query) => {
    
    let url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`
    fetch(url)
    .then(response => response.json())
    .then(gifs => {
      this.setState({
        gifList: gifs.data
      })
    })
  }


  render() {

    return (
      <div>
        <GifSearch searchSubmit={this.searchHandle}/>
        <GifList gifs={this.state.gifList}/>
      </div>
    )

  }
}
