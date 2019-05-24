import React from 'react'


class GifSearch extends React.Component {

  state = {
    search: ""
  }

  handleChange = event => {
    this.setState({
      search: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.submitSearch(this.state.search)
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Search
            <input type="text" onChange={this.handleChange} value={this.state.search} />
          </label>
          <button type="submit">Submit</button>
        </div>
      </form>
    )
  }
}

export default GifSearch
