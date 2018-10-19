import React from 'react'

import NavBar from './NavBar'

import GifListContainer from '../containers/GifListContainer'
// the App component should render out the GifListContainer component

function App() {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        <h1>
          <pre>GifListContainer</pre>
        </h1>
    </div>
  )
}

export default App
