import React from 'react'
import GifSearch from './GifSearch'
import NavBar from './NavBar'

// the App component should render out the GifListContainer component 

function App() {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        < GifSearch />
    </div>
  )
}

export default App
