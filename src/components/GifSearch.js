import React, { Component } from 'react'

export default class GifSearch extends Component {

	constructor(){
		super()
		this.state = {

		}
	}

	render(){
		return (
			<div>
				hello again
			</div>
		)
	}

}


// The `<GifSearch />` component will render a form that receives the user input
// for the giphy search. The text input should be a _controlled component_ that
// stores the value of the input in its component state and renders the DOM
// accordingly. The React component is always in charge of what the DOM looks like.

// `<GifSearch />` should receive a callback prop from its parent. On a submit
// event, it should invoke that callback prop with the value of the text input. It
// is this callback function, defined in `<GifListContainer />`, that will actually
// query the API with the text the user has entered.