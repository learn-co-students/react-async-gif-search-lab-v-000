import React from 'react'

export default class GifSearch extends React.Component {
	constructor() {
		super()
		this.state = {
			value: ""
		}
	}

	handleChange = event => {
		this.setState({
			value: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		this.props.onSubmit(this.state.value)
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
			Search: <input type="text" value={this.state.value} onChange={this.handleChange}></input>
			<input type="submit"></input>
			</form>
		)
	}
}