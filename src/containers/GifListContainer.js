import React, {Component} from 'react';
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifs: []
    };
  };

  listGifs = () => {

  };

  searchGifs = (query) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then((response => response.json()))
      .then((json) => {
        console.log(json)
      })
    debugger;
  };

  render() {
    return (
      <div>
        <GifSearch onSubmit={this.searchGifs} />
        {this.listGifs()}
      </div>
    );
  };

};
