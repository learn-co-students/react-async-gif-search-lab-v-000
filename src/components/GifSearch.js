import React, { Component } from 'react' 

class GifSearch extends Component {
	constructor (props) {
		super(props)
  
		this.state = { searchText: "" }

	  this.handleChange = this.handleChange.bind(this)
	  this.handleSubmit = this.handleSubmit.bind(this)
	}

  handleChange(event) {
    this.setState({searchText: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
		this.props.loadPics(this.state.searchText)
  }

  render () {
    return (
      <div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Search Parameter:
						<input type="text" value={this.state.searchText} onChange={this.handleChange} />
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
    )
  }
}

export default GifSearch

