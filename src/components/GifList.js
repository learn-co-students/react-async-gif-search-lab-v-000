import React from 'react'

const GifList = (props) => {
	return (
		<div>
			{ props.gifURLs.map( gif => <img key={gif.url} src={gif.url} alt='gif' /> )}
		</div>
	)
}

export default GifList