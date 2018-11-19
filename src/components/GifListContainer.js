import React, { Component } from 'react'

import GifSearch from './GifSearch'
import GifList from './GifList'


class GifListContainer extends Component {

	state = {
		gifs: []
	}

	setNewGifs = (searchTerm) => {

		fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
			.then(response => response.json())
			.then(r => {
				this.setState({gifs: r.data.slice(0,3)})
			}
		)
	}

	render(){
		return(
			<div>
				< GifSearch setNewGifs={this.setNewGifs} />
				< GifList gifs={this.state.gifs} />
			</div>
		)
	}

}

export default GifListContainer