import React, { Component } from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

class GifListContainer extends Component {
	constructor(){
		super()
		this.state = {
			urls: []
		}
	}

	handleClickEvent = searchTerm => {
		fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
	    .then(res => res.json())
	    .then(json => {
	    	let urls = [];

	    	for(let i = 0; i < 3; i++){
	    		urls.push(json.data[i].images.original.url)
	    	};

	    	this.setState({
	    		urls: urls
	    	});
	    });
	}

	


	
	render(){
		return(
			<div>
				< GifList urls={this.state.urls} />
				< GifSearch handleClickEvent={this.handleClickEvent}/>
			</div>
		)
	}
}

export default GifListContainer