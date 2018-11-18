import React, { Component } from 'react'



const GifList = ({gifs}) => {

	return (
		<ul>
			{gifs.map(gif => {
				return (
				  <li>
				    <img src='{gif.images.downsized_small.url} 'alt='this is not a gif'/>
				  </li>
				)
			})}
		</ul>
	)
}



export default GifList