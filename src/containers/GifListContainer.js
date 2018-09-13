import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

	state = {
		gifs: []
	}

	render() {
		return (
			<div>
				<GifSearch fetchGIFs={this.fetchGIFs} />
				<GifList gifs={this.state.gifs} />
			</div>
		)
	}

	fetchGIFs = (query = "turtle") => {
		fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
			.then(res => res.json())
			.then(({ data }) => {

				const giflist = data.map(gif => ({ url: gif.images.original.url }))

				this.setState({ gifs: giflist })
			})
			.catch((error) => {
				console.log('this is an error: ', error)
			});
	}

	componentDidMount() {
		this.fetchGIFs()
	}
}

export default GifListContainer