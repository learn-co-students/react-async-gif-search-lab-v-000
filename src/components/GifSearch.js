import React, { Component } from 'react'


class GifSearch extends Component {

	constructor(){
		super()
		this.state = {
			searchTerm: ""
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.handleClickEvent(this.state.searchTerm);
	}

	handleChange = event => {
		this.setState({
			searchTerm: event.target.value
		})
	}



	render() {
	  return (
	  	<form onSubmit={event => this.handleSubmit(event)}>
		  	<input type="text" name="searchTerm" value={this.state.searchTerm} onChange={event => this.handleChange(event)}/>
		  	<input type="submit"/>
	  	</form>
	   	
	    
	  )
	}

}

export default GifSearch