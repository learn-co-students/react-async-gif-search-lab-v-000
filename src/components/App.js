import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'

function App() {
  return (
    <div>
      <NavBar color='white' title="Giphy Search" />
      <GifListContainer />
    </div>
  )
}

export default App
