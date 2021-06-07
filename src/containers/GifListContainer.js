import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
  state = {
    gifData: []
  }

  fetchGifs = (query = "dog") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=Y8qGVQFvcOSAfRv4TLF0QevXKRakj12c&rating=g&limit=3`)
    .then(response => response.json())
    .then(data => {
      this.setState({ gifData: data.data.map(gif => ({url: gif.images.original.url})) })
    })

  }
  
  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifData={this.state.gifData} />
      </div>
    )
  }

  componentDidMount() {
    this.fetchGifs()
  }
}