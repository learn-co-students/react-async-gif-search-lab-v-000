import React from 'react'

import NavBar from './NavBar'
import GiftListContainer from '../containers/GifListContainer';

function App() {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        <GiftListContainer/>
    </div>
  )
}

export default App
