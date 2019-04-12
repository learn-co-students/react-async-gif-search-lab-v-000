import React, { Component } from 'react'
import GifListContainer from '../containers/GifListContainer' 
import GifSearch from './GifSearch'
import NavBar from './NavBar'

// the App component should render out the GifListContainer component

export default class App extends Component {

	onSubmit = query => {
		GifListContainer.fetchGifs(query)
	}

	render() {
		return (
			<div className='app'>
				<NavBar color='black' title='Giphy Search' />
				<GifListContainer />
			</div>
		)
	}
}