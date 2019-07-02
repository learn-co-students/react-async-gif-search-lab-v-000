import React from 'react';

export default class GifSearch extends React.Component {

	state = {
		searchTerm: ''
	}

	handleSubmit = e => {
		e.preventDefault()
		this.props.handleSubmit(this.state.searchTerm)
	}

	handleChange = e => {
	  e.persist()
	  this.setState({
	    searchTerm: e.target.value
	  })
	}


	render() {
		return (
			<form onSubmit={this.handleSubmit}>
		      <input type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
		    </form>

		);
	}
}
