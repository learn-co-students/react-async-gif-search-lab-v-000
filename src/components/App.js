import React from 'react'

import NavBar from './NavBar'
import GifListContainter from '../containers/GifListContainer'

// the App component should render out the GifListContainer component 

function App() {
  return (
    <div>
        <NavBar color='black' title="Giphy Search" />
        <GifListContainter />
    </div>
  )
}

export default App
