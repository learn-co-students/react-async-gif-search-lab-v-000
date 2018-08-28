import React, { Component } from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

	state = {
		gifs: []
	};

	componentDidMount() {
		this.handleSearch();
	}

	render() {
		return (
			<div>
			<GifSearch handleSearch={this.handleSearch}/>
			<GifList gifs={this.state.gifs}/>
			</div>
			)
	}

	handleSearch = (query = 'default') => {
		fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
		.then(response => response.json())
		.then(data => {
			this.setState({
				gifs: data.data.slice(0, 3)
			}, () => console.log(this.state.gifs))
		})
	}
}