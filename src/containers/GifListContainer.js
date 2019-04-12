import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
	state = {
		url: 'http://api.giphy.com/v1/gifs/search?q=',
		apiKey: '&api_key=dc6zaTOxFJmzC',
		rating: '&rating=g',
		gifs: []
	}

	fetchGifs = (query = 'bicycles') => {
		const slug = query.toLowerCase().replace(' ', '%20');
		const url = this.state.url + slug + this.state.apiKey + this.state.rating;

		fetch(url)
			.then( resp => resp.json())
			.then( data => {
				this.setState({
					gifs: data.data.map( gif => ({url: gif.images.original.url })).slice(0, 3)
				}, () => console.log(this.state.gifs));
			});
	}

	componentDidMount() {
		this.fetchGifs()
	}

	render() {
		return (
			<div className='gifListContainer'>
				<GifSearch fetchGifs={this.fetchGifs} />
				<GifList gifs={this.state.gifs} />
			</div>
		)
	}
}