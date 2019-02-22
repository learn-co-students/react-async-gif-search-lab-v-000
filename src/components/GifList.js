import React, { Component } from 'react'

export default class GifList extends Component {
	makeGif = () =>
		this.props.gifs.map((gif, index) => {
			return <li key={index}><img src={gif} alt="" /></li>
		})

	render() {
		return (
			<div>
				<ul>
					{this.makeGif()}
				</ul>
			</div>
		)
	}
}
