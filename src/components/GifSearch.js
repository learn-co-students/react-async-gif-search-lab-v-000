import React from 'react';
class gifSearch extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			query: ''
		};
	}

	handleChange(e) {
		this.setState({
			query: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.fetchGifs(this.state.query);
	}

	render() {
		return (
			<div>
				<form onSubmit={(e) => this.handleSubmit(e)}>
					<label>
						Search:
						<input type="text" value={this.state.query} onChange={(e) => this.handleChange(e)} />
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}

	// toJson = (data) => data.json;
}
export default gifSearch;
