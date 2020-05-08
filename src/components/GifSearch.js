import React from 'react'

class GifSearch extends React.Component {

  constructor() {
    super()
    this.state = {
      search: ""
    }
  }

  handleChange = event => {
    this.setState({
      search: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGifs(this.state.search)
  }

  render(){
    return (
      <div>
	      <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.search} onChange={this.handleChange} />
          <button type="submit">Search</button>         
        </form>
      </div>
    )
  }
}

export default GifSearch