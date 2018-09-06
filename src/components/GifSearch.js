import React, { Component } from 'react'
 export default class GifSearch extends Component {
	state = {
		query: '',
	}
 	handleChange = (event) => {
		this.setState({
			query: event.target.value,
		});
	}
 	handleSubmit = (event) => {
		event.preventDefault()
		this.props.handleSearch(this.state.query)
	}
	
	render () {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text" value={this.state.query} onChange={this.handleChange}/>
				<input type="submit" value="Search" />
			</form>
			)
	}
} 