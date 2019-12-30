import React, { Component } from 'react';

export default class GifSearch extends Component {

	state = {
		query: ''
	}

	handleFormSubmit = (e) => {
		e.preventDefault()
		this.props.fetchData(this.state.query)

		this.setState({query: ''})
	}

	render() {
		return (
			<div className="search-form">
				<form onSubmit={e => this.handleFormSubmit(e)}>
					<div>
						<label>Enter a Search Term:</label>
					</div>
					<div>
						<input id="search" name="keyword" type="text" onChange={e => this.setState({query: e.target.value})} value={this.state.query}/>
					</div>
					<div>
						<button type="submit">Find Gifs</button>
					</div>
				</form>
			</div>
		)
	}
}