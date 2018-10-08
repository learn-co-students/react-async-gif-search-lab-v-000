import React from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

export default class GifListContainer extends Component {
	state = {
		gifs: []
		searchTerm: props.SearchTerm
	}

componentDidUpdate(){
	fetch(`http://api.giphy.com/v1/gifs/search?q=${state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
		.then(response => response())
		.then(data =>{
			this.SetState({
				gifs: data
			})
		})
}


}
