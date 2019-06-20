import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component {

	state = {
		gifs: []
	}

	componentDidMount() {
		this.handleSearch()
	}

	handleSearch(query) {
		fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
		.then(response => response.json())
		.then(data => {
			this.setState({
				gifs: data.data.slice(0,3).map((gif) => {
					return gif.images.original.url
				})
			})
		})
	}

	render () {
		return (
			<div>
			<GifSearch handleSearch={this.handleSearch.bind(this)} />
			<GifList gifs={this.state.gifs} />
			</div>
			)
	}
}

export default GifListContainer