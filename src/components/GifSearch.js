import React from 'react'

export default class GifSearch extends React.Component {
	constructor(props) {
	    super(props);

		this.state = {
			query: '',
			fetchGifs: this.props.fetchGifs
		};
  	}

  	handleQueryChange = event => {
  		this.setState({
  			[event.target.name]: event.target.value
  		});
  	}

  	handleClick = () => {
  		this.state.fetchGifs(this.state.query)
  	}

	render() {
		return (
			<div className='gifSearch'>
				<input 
					name='query'
					value={ this.state.query }
					onChange={ this.handleQueryChange } />
				<button
					onClick={ this.handleClick } >
					Search GIFS
				</button>
			</div>
		)
	}
}