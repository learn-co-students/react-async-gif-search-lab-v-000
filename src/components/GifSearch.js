import React from 'react'

class GifSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGifs(this.state.text)
  }

  changeText = (event) => {
    event.persist()
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type='text'  onChange={this.changeText}/>
        <input type='submit' value='Find Gifs'/>
      </form>

    )
  }

}

export default GifSearch
