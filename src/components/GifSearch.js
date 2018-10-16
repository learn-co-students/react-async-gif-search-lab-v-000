import React from 'react'

class GifSearch extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			query: ""
		};

		this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit = (event) => {
		this.props.getImages(this.state.query)
		event.preventDefault();
	}

	handleChange = (event) => {
		this.setState({
			query: event.target.value
		})
	}

	render(){
		return(
			<div>
			<form onSubmit={this.handleSubmit}>
        <label>
          Search Something:
          <input type="text" value={this.state.query} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
			);
	}
}

export default GifSearch