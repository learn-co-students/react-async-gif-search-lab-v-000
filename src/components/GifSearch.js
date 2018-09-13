import React from 'react'

class GifSearch extends React.Component {
  state = {
    searchTerm: ''
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSearchSubmit(this.state.searchTerm)
  }

  render() {
    return(
      <div className="mb-3">
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
          
          <div className="input-group-addon">Search GIF</div>
          <input className="form-control" id="search-text" value={this.state.searchTerm} onChange={this.handleChange} />
        </div>
        <input className="btn btn-primary" type="submit" value="Submit"/>
      </form>
      </div>
    )
  }
}

export default GifSearch