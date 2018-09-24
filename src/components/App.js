import React from 'react'
import GifListContainer from '../containers/GifListContainer'
import GifSearch from './GifSearch'
import NavBar from './NavBar'

// the App component should render out the GifListContainer component

function App() {
  return (
    <div>
        <NavBar color='black' title="Giphy Search" />
        <GifSearch />
        <GifListContainer />
    </div>
  )
}


export default App
