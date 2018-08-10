import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'

// the App component should render out the GifListContainer component

function App() {
  return (

    <div class="container-fluid">
      <div class="row">
        <div class="col-sm">
          < NavBar  title="Giphy Search" color={"navbar-inverse"}/>
        </div>
        <div class="col-sm">
          < GifListContainer />
        </div>
      </div>
    </div>
  )
}

export default App
