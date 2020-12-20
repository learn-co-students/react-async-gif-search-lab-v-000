import React, { Component } from 'react';

class GifListContainer extends React.Component {
  state = { gifs: [] };

  componentDidMount(query) {
    // const q = query
    fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=YOUR API KEY&rating=g`)
  }  
}

// export default GifListContainer