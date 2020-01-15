import React, {Component} from 'react'

export default class GifSearch extends Component {
  constructor() {
    super();
    this.state = {
      keywords: ''
    }
  }

  handleKeywordsChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSearchSubmit = (event) => {
    event.preventDefault();

    if (!!this.state.keywords) {
      this.props.handleSearch(this.state)
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSearchSubmit}>
          <input onChange={this.handleKeywordsChange} type="text" name="keywords" value={this.state.keywords} />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}
