import React 			from 'react';
import GifList 		from '../components/GifList'
import GifSearch 	from '../components/GifSearch'

export default class GifListContainer extends React.Component {
	state = { gifs: [] }

	componentDidMount() {
		this.handleSearch
	}

	handleSearch = (query) => {
		fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
		.then(response => response.json())
		.then(data => 
			this.setState({ 
				gifs: data.data.map((gif, index) => gif.images.original.url).slice(0, 3)
			})
		)
	}



	render(){
		return (
			<div>
				<GifSearch handleSearch={this.handleSearch} />
				<GifList gifs={this.state.gifs} />
			</div>
		)
	}
}

