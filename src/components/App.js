import React from 'react'

import NavBar from './NavBar'

import GifListContainer from '../containers/GifListContainer'

// App component is the top-level component
// App component is responsible for rendering the <NavBar /> component and the <GifListContainer /> component

const App = () => {
  return (
    <div>
      <NavBar color='black' title="Giphy Search" />
      <GifListContainer />
    </div>
  )
}

export default App