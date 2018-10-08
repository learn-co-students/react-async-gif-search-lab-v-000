import React from 'react'

import NavBar from './NavBar'
import GifList from './GifList'
import GifSearch from './GifSearch'

// the App component should render out the GifListContainer component 

function App() {
  return (
    <div>
        <NavBar color='black' title="Giphy Search" />
        <GifList />
        <GifSearch />
    </div>
  )
}

export default App
