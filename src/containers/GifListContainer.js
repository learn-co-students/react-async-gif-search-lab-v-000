import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {
	constructor() { 
		super()
		this.state = {
			gifs: [],
		}
	}
	onSubmit = (word) => {
		const term = word 
		fetch(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&rating=g`)
		.then(response => response.json()) 
		.then(({data}) => 
			this.setState({ 
				gifs: data 
			}))
		}

	render() {
		return (
			<div>
			<GifSearch onSubmit={this.onSubmit} />
			<GifList gifs={this.state.gifs} />
			</div> 
		)
	}
}