import React, {Component} from 'react'


class GifListContainer extends Component {

	state = {
		threeGifs: []
	}

	render() {
		return (
			GifListContainer
		)
	}

	componentDidMount() {
		fetch('http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
			.then(res => res.json())
			.then(data => {
				this.setState({
					threeGifs: data.images
				})
			})
	}

}

export default GifListContainer