import React, { Component } from 'react'

import GifList from '../components/GifList'

import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

	constructor(){
		super()
		this.state = {
			gifURLs: []
		}
	}

	fetchGifs = (gifSearchTerms = 'cats') => {
		fetch(`https://api.giphy.com/v1/gifs/search?q=${gifSearchTerms}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
		.then( res => res.json())
		.then(({data}) => {
			this.setState({
				gifURLs: data.map( gif => ({ url: gif.images.original.url }) ) })
		})
	}

	render(){
		return(
			<div>
				<div>
					<GifList gifURLs={ this.state.gifURLs }/>
				</div>
				<div>
					<GifSearch fetchGifs={ this.fetchGifs }/>
				</div>
			</div>
		)
	}

	componentDidMount() {
    this.fetchGifs()
	}
}