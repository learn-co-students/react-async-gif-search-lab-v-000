import React from 'react'

import NavBar from './NavBar'

import GifListContainer from '../containers/GifListContainer'

class App extends React.Component {

// the App component should render out the GifListContainer component 



	render() {
	  return (
	    <div>
        <NavBar color='black' title="Giphy Search" />
	    	<GifListContainer />
    	</div>
	  )
	}
}

export default App
