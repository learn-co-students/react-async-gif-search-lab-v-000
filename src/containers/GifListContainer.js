import React, { Component } from 'react';

import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
  // state = { gifs: [] };

  componentDidMount(query) {
    console.log('query:', query);
    
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${process.env.REACT_APP_API_KEY}&rating=g`)
    .then(response => (response.json()))
    .then(data => {
      data.data.forEach(datum => {
        console.log('datum.images.original.url:', datum.images.original.url);
      })
    });
  }

  render() {
    return (
      <div>
        < GifSearch />
      </div>
    )
  }
}

export default GifListContainer