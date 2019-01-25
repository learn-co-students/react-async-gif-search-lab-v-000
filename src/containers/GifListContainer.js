import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

  state = { // setting initial state - the state object has a :gifs key that points to an empty array
  	gifs: []
  }
  // query the Giphy API for gifs that match the search terms entered in the form field
  fetchGifs = (searchTerms = 'dolphins') => {
  	fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerms}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
  	  .then(response => response.json())
      .then(jsonObject => {
        this.setState({
          gifs: jsonObject.data.map(gifObject => ({url: gifObject.images.original.url}))
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
// GifListContainer component is responsible for fetching the data from the giphy api, 
// storing the first 3 gifs from the response in its component state, 
// and passing that data down to its child GifList component as a prop.
// GifListContainer will also render a GifSearch component that renders the form. 
// GifListContainer should pass down a submit handler function to GifSearch as a prop.

// The user enters a search term in the <form>'s text field <input>(see GifSearch component)
// This <form> has an onSubmit handler.
// When the user clicks the Find Gifs submit button, the submit event is triggered and handled by the callback function.

// When I send a fetch request to `http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g`,
// I get back a JSON response object with a top-level key "data" pointing to an array of gif JSON objects.
// Each gif JSON object in this array has a key of "images" that points to an object
// This object, in turn, has a key of "original" that points to an object,
// which, in turn, has a key "url" that points to the string URL path to the actual image
*/