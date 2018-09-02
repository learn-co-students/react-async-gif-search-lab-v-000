import React from 'react'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      gifs: []
    }
  }

  componentDidMount() {
    fetch("http://api.giphy.com/v1/gifs/search?q=nate_diaz&api_key=dc6zaTOxFJmzC&rating=g")
    .then(response => response.json())
    .then(data => this.setState({
      gifs: data
    }))
  }

  render() {
    return (
      <div>
        < GifList gifs={this.state.gifs} />
      </div>
    )
  }
}

export default GifListContainer;