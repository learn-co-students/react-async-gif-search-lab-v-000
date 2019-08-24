import React from 'react'

const GifList = () => {
	return (
		'hello'
	)
}

//How does the DOM know to include GifList if it's not imported into App? something implicit in React or ReactDOM?
//Then why isn't the text in GifSearch being rendered? And why wasn't when it had the exact same functional component setup as GifList had?
//Now why isn't it showing 'hello' with GifSearch totally commented out in App????
//Why the two index.htmls?


export default GifList


// `<GifList />` is a _presentational_ component. It receives data from its props
// and renders html given the input data. It can render a top level `<ul>` with
// each gif as an `<li>`.