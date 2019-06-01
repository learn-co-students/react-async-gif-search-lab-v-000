import React from 'react'
import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'

const App = () => {
	  return (
	    <div>
	        <NavBar color='blue' title='Giphy Search' /><br />
	        <GifListContainer />
	    </div>
	  )
}

export default App
