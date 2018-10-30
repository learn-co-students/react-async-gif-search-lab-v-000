import React, {Component} from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {

  constructor() {
    super()
    this.state = {
      gifs: []
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    const searchPhrase = event.target["searchTerm"].value
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchPhrase}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          gifs: [json.data[0], json.data[1], json.data[2]]
        })
      })
  }

  render() {
    return (
      <div>
        < GifSearch onSubmit={this.handleSubmit} />
        < GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}
