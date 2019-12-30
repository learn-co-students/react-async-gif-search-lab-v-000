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
			keyword: ''
		}
	}

	fetchData() {
		fetch(`${SEARCH_API_ENDPOINT}?q=${this.state.keyword}&api_key=${REACT_APP_GIPHY_API_KEY}&rating=g&limit=3`)
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

	handleFormSubmit = (e) => {
		e.preventDefault()
		this.fetchData()
		this.setState({keyword: ''})
	}

	handleFormQuery = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render() {
		return (
			<div>
				<GifList gifs={this.state.gifs}/>
				<GifSearch keyword={this.state.keyword} handleFormSubmit={this.handleFormSubmit} handleFormQuery={this.handleFormQuery} />
			</div>
		)
	}
}