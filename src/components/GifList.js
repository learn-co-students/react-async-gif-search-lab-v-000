import React from 'react'

const GifList = (props) => {
	return (
		<div className='col-sm-6'>
			{ props.gifURLs.map( gif => 
				<ul>
					<li>
						<img key={gif.url} src={gif.url} alt='gif' />
					</li>
				</ul>
			)}
		</div>
	)
}

export default GifList