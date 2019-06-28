import React from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

class GifListContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gifs: [],
      query: ''
    }
  }

  handleSubmit (event) {
    event.preventDefault()
    this.setState({
      query: event.target.name.value
    })
  }

  render () {
    return (
      <div>
        <GifSearch query={this.state.query} onSubmitQuery={this.handleSubmit}/>
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

  componentDidMount () {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(response => response.json())
      .then(data => this.setState({ gifs: data.data.slice(0, 3).map(gif => (gif.images.original.url))}));
  }
}

export default GifListContainer
