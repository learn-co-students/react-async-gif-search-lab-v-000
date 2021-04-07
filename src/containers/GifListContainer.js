import React from 'react'

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {
	constructor(){
		super()

		this.state = {
			gifs: []
		}
	}

	searchHandler = (e, term) => {
		e.preventDefault()
		fetch('https://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=BeAYztP6xHmuZ7je5l6fJVAo6HGbvs84&rating=g')
				.then(response => response.json())
				.then(json => this.sortData(json.data.slice(0, 3)))
	}

	sortData = (data) => {
		this.setState({
			gifs: data
		})
	}

	render(){
		return(<div>

				<GifSearch searchHandler={this.searchHandler}/>


				<GifList gifs={this.state.gifs}/>

			</div>)
	}
}
