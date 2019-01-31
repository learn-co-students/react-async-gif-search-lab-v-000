import React from 'react';

export default class GifSearch extends React.Component {
	state = {
		search: ""
	}

	handleForm = (event) => {
		event.preventDefault();
		this.props.handleSearch(this.state.search)
	}

	render() {
		return (
			<form onSubmit={this.handleForm}>
				<input type="text" id="search" onChange={e => this.setState({search: e.target.value})} value={this.state.search}></input>
				<input type="submit" value="Search" />
			</form>
		)
	}
}