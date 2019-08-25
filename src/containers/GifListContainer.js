import React, { Component } from 'react'

import GifList from '../components/GifList'

import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

	constructor(){
		super()
		this.state = {
			gifURLS: []
		}
	}

	fetchGifs = (gifSearchTerms) => {
		fetch(`https://api.giphy.com/v1/gifs/search?q=${gifSearchTerms}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
		.then( res => res.json())
		.then(({data}) => {
			this.setState({
				gifURLS: data.map( gif => ({ url: gif.images.original.url }) ) })
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
    this.fetchGIFs()
	}
}

// the <GifListContainer /> will be responsible for fetching the data from the giphy API, storing the first 3 gifs from the response in its component state, and passing that data down to its child, the <GifList> component, as a prop.

// It will also render a <GifSearch /> component that renders the form. <GifListContainer /> should pass down a submit handler function to <GifSearch /> as a prop.
