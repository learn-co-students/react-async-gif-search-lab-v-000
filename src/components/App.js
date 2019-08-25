import React from 'react'

import NavBar from './NavBar'

import GifListContainer from '../containers/GifListContainer'

const App = () => {
  return (
    <div>
      <div>
        < NavBar color='black' title="Giphy Search" />
      </div>
      <div className='row'>
        <GifListContainer />
      </div>
    </div>
  )
}

export default App
