import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'

// the App component should render out the GifListContainer component

function App() {
  return (
    <div className="none">
      < NavBar color='black' title="Giphy Search" />
    <div className="container">
        < GifListContainer />
      </div>
    </div>
  )
}

export default App
