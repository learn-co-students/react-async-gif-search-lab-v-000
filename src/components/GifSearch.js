import React, { Component } from 'react'

class GifSearch extends Component {

	state = {
		search: ""
	}

	handleChange = event => {
		event.persist()
		this.setState({
			[event.target.id]: event.target.value
		})
	}

	render(){
		return(
			<form onSubmit={() => this.props.handleOnSubmit(this.state.search)}>
				<input type="text" id="search" value={this.state.search} onChange={this.handleChange}/>
				<input type="submit" value="Search"/>
			</form>	
		)
	}
}

export default GifSearch