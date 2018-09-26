import React from 'react'

const GifList = ({gifs}) => (
	<ul>
	    {gifs.map((c, i) => (
	      <li key={i}>{c}</li>
	    ))}
	</ul>
)

export default GifList