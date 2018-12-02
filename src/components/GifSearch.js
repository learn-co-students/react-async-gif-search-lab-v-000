import React from 'react'

class GifSearch extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      userInput: ''
    }

  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.fetchGifs(this.state.userInput)
  }

  handleChange = (event) => {
    this.setState ({
      userInput: event.target.value
    })
  }

  render() {
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        <label> Gif Search </label>
        <input type='textbox' value={this.state.userInput} onChange={this.handleChange} />
      </form>
      </div>
    )
  }

}

export default GifSearch
