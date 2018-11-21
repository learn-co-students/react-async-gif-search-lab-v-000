import React from 'react'

export default class GifSearch extends React.Component {
  state = {
    value: ""
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.search(this.state.value)
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
        Enter keyword(s):
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
