import React from 'react'
import NavBar from './NavBar'
import GifListContainer from '.src/containers/GifListContainer'
// the App component should render out the GifListContainer component
// giphy key: XV0KMGghwZpJg9ceQYCSg61l209OnFCi

const App = () => {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        < GifListContainer />
    </div>
  )
}

export default App
