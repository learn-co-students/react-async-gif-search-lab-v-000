import React from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {

	state = {
		gifData: []
	}

	handleSubmit = (searchTerm = this.searchTerm) => {
		fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
	      .then(response => response.json())
	      .then(({data}) => {
	        this.setState({
	          gifData: data.map(gif => ({ url: gif.images.original.url }))
	        })
	      })
	}

	componentDidMount() {
	    this.handleSubmit()
	  }


	render() {
		return (
			<div>
				< GifSearch handleSubmit={this.handleSubmit} />
				< GifList gifData={this.state.gifData} />
			</div>
		);
	}
}