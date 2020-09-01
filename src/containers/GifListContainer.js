// a container that does data fetching and then renders its corresponding sub-component. That’s it.
// responsible for fetching the data from the giphy API, storing the first 3 gifs from the response in its component state, and passing that data down to its child, the <GifList> component, as a prop.
// render a <GifSearch /> component that renders the form. <GifListContainer /> should pass down a submit handler function to <GifSearch /> as a prop.
import React, { Component } from 'react';

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'
class GifListContainer extends Component {

  state = {
      gifs: []
  }

  // fetch gifs
  fetchGifs = (searchTerm) => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=J3nGlCtX1VpXPpr0VF2YIK5LHkDfRJ8I&q=${searchTerm}&limit=3&offset=0&rating=g&lang=en`)
    .then(response => response.json())
    .then(gifs => {
      this.setGifs(gifs.data)
    })
  }

  // update state with returned gifs
  setGifs = (gifs) => {
    this.setState({
      gifs: gifs
    })
  }

  // submit handler
  handleSubmit = (event) => {
    event.preventDefault()
    this.fetchGifs(event.target.searchTerm.value)
  }

  render() {
    return(
      <div className="container">
        <GifSearch handleSubmit={this.handleSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}

export default GifListContainer