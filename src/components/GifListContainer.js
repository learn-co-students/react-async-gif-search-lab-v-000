import React, { Component } from 'react'

import GifSearch from './GifSearch'
import GifList from './GifList'


class GifListContainer extends Component {

	state = {
		gifs: []
	}

	setNewGifs(newGifs){
		this.setState({
			gifs: newGifs
		})

		fetch("http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g")
		.then(response => response.json())
		.then(data => {
			this.setNewGifs(data.gifs.slice(0,3))
		})
	}

	render(){
		return(
			<div>
				< GifSearch />
				< GifList />
			</div>
		)
	}

}

export default GifListContainer