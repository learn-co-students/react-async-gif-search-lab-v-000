import React from 'react'

const GifList = props => {
	return(
		<div>
			{ props.gifs.map(gif => <img key={gif.url} src={gif.url} alt={this.title} />)}
		</div>
	)
}

export default GifList