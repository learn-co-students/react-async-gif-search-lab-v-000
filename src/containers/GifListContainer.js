import React, { Component } from 'react';

const MY_KEY = process.env.REACT_APP_API_KEY;
    console.log('MY_KEY:', MY_KEY);

class GifListContainer extends React.Component {
  state = { gifs: [] };

  componentDidMount(query) {
    // const MY_KEY = process.env.REACT_APP_API_KEY;
    // console.log('MY_KEY:', MY_KEY);
    // const q = query
    fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=${MY_KEY}&rating=g`)
  }  
}

// export default GifListContainer