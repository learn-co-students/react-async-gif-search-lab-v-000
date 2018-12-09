import React, {Component} from 'react'

class GifSearch extends Component{

  state = {
    queryString: ""
  }

  handleChange = (change) => {
    this.setState({
      queryString: change.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSearch(this.state.queryString)
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" id="queryString" onChange={this.handleChange} />
        <input type="submit" />
      </form>
    )
  }

}

export default GifSearch
