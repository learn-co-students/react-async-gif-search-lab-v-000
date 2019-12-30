import React, { Component } from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

const { REACT_APP_GIPHY_API_KEY } = process.env
const SEARCH_API_ENDPOINT = 'https://api.giphy.com/v1/gifs/search'

export default class GifListContainer extends Component {
	constructor() {
		super()
		this.state = {
			gifs: [],
		}
	}

	fetchData = (query = 'dolphins') => {
		fetch(`${SEARCH_API_ENDPOINT}?q=${query}&api_key=${REACT_APP_GIPHY_API_KEY}&rating=g&limit=3`)
		.then(res => res.json())
		.then(gifs => {
			this.setState({
				gifs: gifs.data
			})
		})	
	}

	componentDidMount() {
		this.fetchData()
	}

	render() {
		return (
			<div>
				<GifList gifs={this.state.gifs}/>
				<GifSearch fetchData={this.fetchData} />
			</div>
		)
	}
}