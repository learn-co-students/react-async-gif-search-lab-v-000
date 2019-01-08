import React, { Component } from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer.js'

// the App component should render out the GifListContainer component

// function App() {

export default class App extends Component {

  render() {
    return (
      <div>
        <div>
          < NavBar color='black' title="Giphy Search" />
        </div>
        <br />
        <div>
          <GifListContainer />
        </div>
      </div>
    )
  }

}
