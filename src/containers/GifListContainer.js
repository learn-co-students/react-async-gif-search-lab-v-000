import React, { Component } from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends Component {

	state = {
		gifs: []
	};


	handleOnSubmit = (search) => {
		fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
		.then(res => res.json())
		.then(gifsData => 
			this.setState({
				gifs: gifsData.slice(0, 3)
			})
		)
	}

	render() {
		return (
			<div>
				< GifSearch handleOnSubmit={this.handleOnSubmit}/>
				< GifList gifs={this.state.gifs} />
			</div>
		)
	}
}

export default GifListContainer