import React, { Component } from 'react'

class GifList extends Component {

	render () {
		return (
			<div>
			{this.props.gifs.map(
				g=> (
					<img key={g} src={g} alt="cool gif" />
					))}
			</div>
		)
	}
}
export default GifList
