import React, { Component } from 'react';
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'


export default class GifListContainer extends Component {

  state = {
    gifData: []
  }



  fetchQuery = (query) => {
    const API_KEY = process.env.REACT_APP_GIPHY_API;
    if (query !== '') {
      fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&rating=g`)
        .then(response => response.json())
        .then(json => this.setState({gifData: json.data}))
    }
  }

  render() {
    return(
      <div>
        <GifSearch submitQuery={this.fetchQuery} />
        <GifList data={this.state.gifData} />
      </div>
    )
  }
}
