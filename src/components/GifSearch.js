import React, { Component } from 'react'

export default class GifSearch extends Component {

	constructor(props){
		super(props)
		this.state = {
			gifSearchTerms: ''
		}
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.fetchGifs(this.state.gifSearchTerms)
	}

	render(){
		return (
			<div>
				<p>
					Enter a Search Term:
				</p>
				<form onSubmit={ this.handleSubmit }>
					<input 
						type='text' 
						value={ this.state.gifSearchTerms }
						onChange={
							 (e) => {
								 this.setState({
									 gifSearchTerms: e.target.value
								 })
							 } 
							}
					/>
				</form>
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