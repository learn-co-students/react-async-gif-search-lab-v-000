import React, {Component} from 'react'

export default class GifSearch extends Component {

  constructor() {
    super()
    this.state = {
      searchTerm: ""
    }
  }

  handleChange = event => {
    event.persist()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}/><br/>
          <input type="submit" value="Find GIFs"/>
        </form>
      </div>
    )
  }
}
