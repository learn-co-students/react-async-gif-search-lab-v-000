import React from 'react'

import NavBar from './NavBar'

import GifListContainer from '../containers/GifListContainer'

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
    </div>
  )
}

export default App
