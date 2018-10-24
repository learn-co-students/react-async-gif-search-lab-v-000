
//A container does data fetching and then renders its corresponding sub-component. That’s it.
// In our app the <GifListContainer /> will be responsible for fetching the data from the giphy api,
// storing the first 3 gifs from the response in it's component state, and passing that data down to
// it's child the <GifList> component as a prop.
// It will also render a <GifSearch /> component that renders the form. <GifListContainer /> should
// pass down a submit handler function to <GifSearch /> as a prop.

import React, { Component } from 'react';

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
 state= {gifs: []}

  handleSubmit = (search) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      // same as data.data
      .then(({ data }) => {
        const gifurls = data.map((gif) => ({ url: gif.images.original.url }))
        this.setState({ gifs: gifurls})
      })
  }
  render() {
    console.log("GifListContainer state",this.state)
    return (
      <div>
        <GifSearch handleSubmit={this.handleSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
