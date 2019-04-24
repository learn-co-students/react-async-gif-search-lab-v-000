import React, { Component } from 'react';

class GifSearch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchQuery: ''
		};
	}

	handleChange = (event) => {
		this.setState({
			searchQuery: event.target.value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.handleFetchGifs(this.state.searchQuery);
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Give me search:
					<input type="text" value={this.state.searchQuery} onChange={this.handleChange} />
				</label>
				<input type="submit" value="submit friend" />
			</form>
		);
	}
}

export default GifSearch;
