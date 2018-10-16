import React from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

class GifListContainer extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			images: []
		};
		// this.getImages = this.getImages.bind(this);
	}

	componentDidMount(){
		this.getImages()
	}

	getImages = (query = "dolphins")=>{
		fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`).then(resp => resp.json()).then(body => this.setState(images: body.data.map(img => img.images.original.url)));
	}

	// 

	render(){
		return (
			<div>
				<GifSearch getImages={this.getImages}/>
				<GifList images={this.state.images}/>
			</div>
			);
	}

}

export default GifListContainer