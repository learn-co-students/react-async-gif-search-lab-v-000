import React from 'react'

const GifList = (props) => {
	return (
		<div>
			{ props.gifURLs.map( gif => 
				<ul>
						<li>
								<img key={gif.url} src={gif.url} alt='gif' />
{/* How is it simply making a new li for each instance rather than requiring a more abstract assignment to the ul? */}
						</li>
				</ul>
			)}
		</div>
	)
}

// const GifList = (props) => {
// 	return (
// 		<div>
// 			{ props.gifURLs.map( gif => <img key={gif.url} src={gif.url} alt='gif' /> )}
// 		</div>
// 	)
// }


export default GifList