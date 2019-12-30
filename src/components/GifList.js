import React, { Component } from 'react';

export default class GifList extends Component {
	
	makeGifLi = () => {
		return (this.props.gifs.map(gif => {
					return <li key={gif.id}><img src={gif.images.original.url} alt=""></img></li>
				}))
	}

	render() {
		return (
			<div className="gif-list">
				<ul>
					{this.makeGifLi()}
				</ul>
			</div>
		)
	}
}