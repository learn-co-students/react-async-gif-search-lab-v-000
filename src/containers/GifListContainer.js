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

	fetchGifs = () => {
		fetch('http://api.giphy.com/v1/gifs/search?q=cats&api_key=dc6zaTOxFJmzC&rating=g')
		.then( res => res.json())
		.then( json => console.log(json))
	}
	//will set state in above function with search results

	
	render(){
		return(
			<div>
				<div>
					<GifList returnedGifs={ this.state.gifURLs }/>
				</div>
				<div>
					<GifSearch fetchGifs={ this.fetchGifs }/>
				</div>
			</div>
		)
	}

}




// the <GifListContainer /> will be responsible for fetching the data from the giphy API, storing the first 3 gifs from the response in its component state, and passing that data down to its child, the <GifList> component, as a prop.

// It will also render a <GifSearch /> component that renders the form. <GifListContainer /> should pass down a submit handler function to <GifSearch /> as a prop.


//do i absolutely NEED to use componentDidMount? What are its advantages? Just optimization?