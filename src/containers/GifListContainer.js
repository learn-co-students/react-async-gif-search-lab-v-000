import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
  state = {
    gifs: []
  }

  handleSearch = q => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${q}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json())
    .then(json => {
      this.setState({
        gifs: json.data.map(el => el.images.original.url)
      })
    })
  }

  componentDidMount() {
    this.handleSearch()
  }

  render() {
    return (
      <div>
        <GifSearch search={this.handleSearch} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}
