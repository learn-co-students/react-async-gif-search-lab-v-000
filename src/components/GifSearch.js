import React, { Component } from 'react'

export default class GifSearch extends Component {
	state = {
		searchText: ""
	}

	handleSearch = event => {
		event.preventDefault()
		this.props.handleSearch(this.state.searchText)
	}

	handleSearchClick = event => {
		event.preventDefault()
		this.setState({
			searchText: event.target.value
		})
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSearch}>
					<input type="text" value={this.state.searchText} placeholder={"Enter search term"} onChange={this.handleSearchClick} />
				</form>
			</div>
		)
	}
}
