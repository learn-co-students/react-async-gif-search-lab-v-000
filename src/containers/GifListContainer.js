import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
  state = {
    gifs: [],
    query: ''
  }
  fetchGifs = (query) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(response => response.json())
    .then(
      json => {
        this.setState({
        gifs: json.data.slice(0, 3).map(gif => gif.images.original.url)
      })
    })
  }
  componentDidMount() {
    this.fetchGifs('dogs')
  }
  render () {
    return (
      <div>
      <GifSearch fetchGifs={this.fetchGifs}/>
      <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}

export default GifListContainer;
