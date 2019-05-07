import React, { Component } from 'react'

import NavBar from './NavBar'

import GifListContainer from '../containers/GifListContainer'
// the App component should render out the GifListContainer component

class App extends Component {
  componentDidMount() {
    // let url = 'http://api.giphy.com/v1/gifs/search?q='
    //
    // url += '&api_key=dc6zaTOxFJmzC&rating=g'
    // fetch('http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
  }

  render() {
    return (
      <div>
        < NavBar color='black' title="Giphy Search" />
        <GifListContainer />

      </div>


    )
  }

}

export default App
