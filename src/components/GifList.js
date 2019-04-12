import React from 'react'

export default class GifList extends React.Component {

	createGifCards = gifs => {
		return gifs.map( gif => <img src={gif.url} /> )
	}

	render() {
		const gifs = this.createGifCards(this.props.gifs)

		return (
			<div className='gifList'>
				{gifs}
			</div>
		)
	}

}