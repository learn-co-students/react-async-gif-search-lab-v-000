import React, { Component } from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

class GifListContainer extends Component {
// set initial state. The state object has a :gifs key that points to an empty array. (This array will ultimately contain gif JSON objects)
  state = {
    gifs: []
  }
  // Arrow function callback queries the Giphy API with the search terms the user entered in the form's text field <input>
  fetchGifs = searchTerms => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerms}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(response => response.json())
      .then(jsonObject => {
        this.setState({
          gifs: jsonObject.data.map(gifObject => ({ url: gifObject.images.original.url })) // parentheses needed around object for implicit returns
        })
      })
  }

  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifsArray={this.state.gifs} />
      </div>
    )
  }
}

export default GifListContainer;
/*
// GifListContainer component is responsible for fetching the remote data from the Giphy API, 
// storing the first 3 gifs from the response (an array of 3 gif JSON objects) in its component state, 
// and passing that data down to its child GifList component as a prop.
// GifListContainer will also render a GifSearch component that renders the form. 
// GifListContainer should pass down a submit handler function to GifSearch as a prop.

// When I send a fetch request to `http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g&limit=3`,
// I get back a JSON response object with a top-level key "data" pointing to an array of gif JSON objects.
// Each gif JSON object in this array has a key of "images" that points to an object.
// This object, in turn, has a key of "original" that points to an object,
// which, in turn, has a key "url" that points to the string URL path to the actual image
*/