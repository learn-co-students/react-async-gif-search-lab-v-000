import React from 'react'

export default class GifSearch extends React.Component {
	constructor(){
		super()

		this.state = {
			searchTerm: ""
		}
	}

	inputHandler = (e) => {
		this.setState({
			searchTerm: e.target.value
		})
	}

	render(){
		return(<div>


						<form className="form-inline" onSubmit={e => this.props.searchHandler(e, this.state.searchTerm)}>
						  <input  className="form-control mb-2 mr-sm-2" 
						  				placeholder="Search" 
						  				onKeyUp={e => this.inputHandler(e)}/>

						  <button className="btn btn-primary mb-2" >Submit</button>
						</form>


			</div>)
	}
}