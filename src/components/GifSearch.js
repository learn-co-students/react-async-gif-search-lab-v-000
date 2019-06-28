import React from 'react'

class GifSearch extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      query: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({
      query: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.onQuerySubmit(this.state.query)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
        Query
        <input type="text" name="name" onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
export default GifSearch
