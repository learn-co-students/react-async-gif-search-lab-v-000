import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'


const App = () => {
  return (
    <div>
        < NavBar color='black' title="Type your Search Here:" />
        < GifListContainer />
    </div>
  )
}

export default App
