import React, { Component } from 'react'

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component {
  state = { pics: [] }

	loadPics = (searchParam) => { 
		console.log(searchParam) 
		const query = "http://api.giphy.com/v1/gifs/search?q=" + searchParam.trim() + "&api_key=F6L6jdZpFqy4l8Jd7XbCbWmIuRGnQoeR&rating=g"	
		fetch (query)
			.then(res => res.json())
			.then(json => {
											const pics = json.data.map(el => el.images.original.url)
											this.setState({pics: pics})
										})
	}
	
	render () {
		return (
			<div>
				<div>
						< GifList pics={this.state.pics}/>
				</div>
				<div>
					< GifSearch loadPics={this.loadPics} />
				</div>
			</div>
		)
	}
}

export default GifListContainer 

