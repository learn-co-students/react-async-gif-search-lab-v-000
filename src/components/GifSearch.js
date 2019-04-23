import React from 'react'

class GifSearch extends React.Component {
	state = {
		searchTerm: ''
	}
	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<label for='searchTerm'>Search for: </label>
				<input type='text' name='searchTerm' id='searchTerm' value={this.state.searchTerm} onChange={this.handleChange}/>
				<input type='submit' value="Search" />
			</form>
		)
	}

	handleChange = event => {
		event.persist()
		this.setState({
			[event.target.id]: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		this.props.getGifs(this.state.searchTerm)
	}
}

export default GifSearch