import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'

// Your top level component will be the <App /> component-- no surprises there! It will be responsible for
// rendering the <NavBar /> component (this component is already provided for you, note the project has
// bootstrap loaded in) and the <GifListContainer /> component

function App() {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        < GifListContainer color='black' title="OHAI"/>
    </div>
  )
}

export default App
