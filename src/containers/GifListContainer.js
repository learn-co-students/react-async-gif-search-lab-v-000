import React, { Component } from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';
class GifListContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			urls: [],
			searchQuery: ''
		};
	}

	handleGifSearchSubmit = (searchArg) => {
		this.handleFetchGifs(searchArg);
	};

	handleFetchGifs = (query) => {
		fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
			.then((res) => console.log(res))
			/* 
			.then((data) => {
				const threeImg = data.data.slice(0, 3).map((el) => {
					return el.images.original.url;
				});
				this.setState(
					{
						urls: threeImg
					},
					() => {
						console.log(this.state);
					}
				);
			});
			*/
			.then((r) => console.log(r));
	};

	render() {
		return (
			<div>
				<GifSearch handleFetchGifs={this.handleFetchGifs} />
				<GifList imageURLs={this.state.urls} />
			</div>
		);
	}
}

export default GifListContainer;
