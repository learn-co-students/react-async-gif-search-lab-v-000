import React, {Component} from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component {

	state = {
		gifs: []
	}

	getGifs = (query) => {
		fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
		.then(response => response.json())
		.then(data => {
			this.setState({
				gifs: data.data.map(gif => gif.images.original.url).slice(0, 3)
			})
		})
	}

	// console.log(data.data.map(gif => gif.images.original.url))

	handleSubmit = (query) => {
		this.getGifs(query)
	}

	render() {
		return(
			<div>
				<GifSearch handleSubmit={this.handleSubmit}/>
				<GifList gifs={this.state.gifs}/>
			</div>

		)
	}

}

export default GifListContainer