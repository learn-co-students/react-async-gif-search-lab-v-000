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
				<form onSubmit={ this.handleSubmit } id='gif-form'>
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
				<button 
					onSubmit={ this.handleSubmit } 
					form="gif-form">
					Find Gifs
				</button>
			</div>
		)
	}
}