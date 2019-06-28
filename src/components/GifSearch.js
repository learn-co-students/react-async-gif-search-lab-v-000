import React from 'react'

class GifSearch extends React.Component{
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    this.props.onSubmitQuery(event.target.name.value)
  }

  render () {
    const query = this.props.query
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
        Query
        <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
export default GifSearch
