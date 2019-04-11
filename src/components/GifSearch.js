import React from 'react'

class GifSearch extends React.Component {

  state = {
    query: ""
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.query} onChange={ this.handleChange } />
        </form>
      </div>
    )
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onSearch(this.state.query)
  }

  handleChange = event => {
    this.setState({
      query: event.target.value
    })
  }

}

export default GifSearch