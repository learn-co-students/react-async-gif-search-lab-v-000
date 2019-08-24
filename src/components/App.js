import React from 'react'

import NavBar from './NavBar'

import GifListContainer from '../containers/GifListContainer'

import GifList from './GifList'

import GifSearch from './GifList'

// the App component should render out the GifListContainer component 

const App = () => {
  return (
    <div>
      {/* wrapper */}
      <div>
        < NavBar color='black' title="Giphy Search" />
      </div>
      <div>
        <GifListContainer />
      </div>
      <div>
        <GifList />
      </div>
      <div>
        <GifSearch />
      </div>
    </div>
  )
}

export default App
