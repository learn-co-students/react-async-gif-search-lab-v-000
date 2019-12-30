import React, { Component } from 'react';

export default class GifSearch extends Component {

	render() {
		return (
			<div className="search-form">
				<form onSubmit={e => this.props.handleFormSubmit(e)}>
					<div>
						<label>Enter a Search Term:</label>
					</div>
					<div>
						<input id="search" name="keyword" type="text" onChange={e => this.props.handleFormQuery(e)} value={this.props.keyword}/>
					</div>
					<div>
						<button type="submit">Find Gifs</button>
					</div>
				</form>
			</div>
		)
	}
}