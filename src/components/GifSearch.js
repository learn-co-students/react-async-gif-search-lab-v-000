import React, { Component } from 'react'

class GifSearch extends Component {

	state = {
		query: ''
	}

	handleInputChange = (e) => {
		this.setState({
			query: e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.handleSearch(this.state.query);
	}

	render () {
		return (
			<div>
			<form onSubmit={this.onSubmit}>
			<input placeholder="Search for gifs..."
				type="text"
				value={this.state.query}
				onChange={this.handleInputChange}
				/>
				<input type="submit" />
				</form>
				</div>
		)
	}
}
export default GifSearch