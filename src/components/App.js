import React from 'react'
import NavBar from './NavBar'

import GifListContainer from '../containers/GifListContainer'
// ^^ Meg code ^^

const App = () => {
  return (
    <div>
      < NavBar color='black' title="Giphy Search" />
      < GifListContainer />
      {/* ^^ Meg code ^^ */}
    </div>
  )
}

export default App
