import React, {Component} from 'react'

class GifSearch extends Component {
	state = {
		query: ''
	}

	handleChange = (event) => {
		this.setState({
			query: event.target.value
		})
	}

	render() {
		return(
			<div>
				<form onSubmit={this.props.handleSubmit(this.state.query)}>
					<input type='text' value={this.state.query} onChange={this.handleChange.bind(this)} />
					<br/>
					<input type="submit" value="Submit" />
				</form>
			</div>
		)
	}

}

export default GifSearch