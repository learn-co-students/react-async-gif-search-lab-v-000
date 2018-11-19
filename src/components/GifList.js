import React, { Component } from 'react'



const GifList = ({gifs}) => {

	return (
		<ul>
			{gifs.map(gif => {
				return (
				  <li>
				    <img src={gif.images.downsized_large.url} alt={gif.embed_url}/>
				  </li>
				)
			})}
		</ul>
	)
}



export default GifList