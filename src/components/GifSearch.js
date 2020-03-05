import React from 'react'

export default class GifSearch extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  handleChange = event => {
    this.setState({
      search: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={(event) => {
          event.preventDefault()
          this.props.handleSubmit(this.state.search)
        }
      }>
        <input type="text" onChange={this.handleChange}/>
        <input type="submit" value="Search Giphy"/>
      </form>
    )
  }
}
