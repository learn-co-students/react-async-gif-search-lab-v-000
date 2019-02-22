import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component {
	state = { gifs: [] }

	componentDidMount = () => {
		this.fetchGifs(gifs => {
			this.setState({ gifs: gifs })
		})
	}

	fetchGifs = (searchText) => {
		fetch(`http://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=dc6zaTOxFJmzC&rating=g`)
			.then(response => response.json())
			.then(json => this.setState({
				gifs: [
					json.data[0].images.original.url,
					json.data[1].images.original.url,
					json.data[2].images.original.url
				]
			}))
	}

	searchGifs = (input) => {
		fetch('http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
			.then(json => this.setState({
				gifs: [
					json.data[0].images.original.url,
					json.data[1].images.original.url,
					json.data[2].images.original.url
				]
			}))
	}

	render() {
		return (
			<div>
				<GifSearch handleSearch={this.fetchGifs} />
				<GifList gifs={this.state.gifs} />
			</div>
		)
	}
}
