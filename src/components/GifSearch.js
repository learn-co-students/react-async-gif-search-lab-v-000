import React, { Component } from 'react'

export default class GifSearch extends Component {

	constructor(props){
		super(props)
		this.state = {
			gifSearchTerms: ''
		}
	}

	setGifSearchTerms = (e) => {
		this.setState({
			gifSearchTerms: e.target.value
		})
	}

	render(){
		return (
			<div>
				<p>
					Enter a Search Term:
				</p>
				<input 
					type='search' 
					id='gifSearchTerms'
					name='gifSearchTerms'
					value={ this.state.gifSearchTerms }
					onChange={ this.setGifSearchTerms }
				/>
				<button onSubmit={ this.props.submitGifSearchTerms }>
					Find Gifs
				</button>
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



// render() {
// 	return (
// 		<form onSubmit={ this.handleSubmit } >
// 			<div>
// 				<label>
// 					Username
// 					<input 
// 						id="username" 
// 						name="username" 
// 						type="text"
// 						value={ this.state.username }
// 						onChange={ this.updateLogin }
// 					/>
// 				</label>
// 			</div>
// 			<div>
// 				<label>
// 					Password
// 					<input 
// 						id="password" 
// 						name="password" 
// 						type="password"
// 						value={ this.state.password }
// 						onChange={ this.updateLogin } 
// 				/>
// 				</label>
// 			</div>
// 				<input
// 					type="submit"
// 					value="Submit"
// 				/>
// 		</form>
// 	);
// }
// The `<GifSearch />` component will render a form that receives the user input
// for the giphy search. The text input should be a _controlled component_ that
// stores the value of the input in its component state and renders the DOM
// accordingly. The React component is always in charge of what the DOM looks like.

// `<GifSearch />` should receive a callback prop from its parent. On a submit
// event, it should invoke that callback prop with the value of the text input. It
// is this callback function, defined in `<GifListContainer />`, that will actually
// query the API with the text the user has entered.