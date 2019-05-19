import React, { Component } from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'

// the App component should render out the GifListContainer component 

class App extends Component {
  
  render() {
    return (
      <div>
        <GifListContainer />
        <NavBar color='black' title="Giphy Search" />
      </div>
    )
  }
}

export default App
