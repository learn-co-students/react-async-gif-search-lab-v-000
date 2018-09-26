import React from 'react'

const GifList = ({gifs}) => (
	<ul>
	    {gifs.map(c => (
	      <li>{c}</li>
	    ))}
	</ul>
)

export default GifList