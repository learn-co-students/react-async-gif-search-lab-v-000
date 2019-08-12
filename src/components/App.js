import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'

// import GifList from './GifList'
// import GifSearch from './GifSearch'

const App = () => {
  
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        <GifListContainer />
        
    </div>
  )
}

export default App
