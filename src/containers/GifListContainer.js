import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
  state = {
    gifs: []
  }

  componentDidMount() {
    this.fetchGifs()
  }

  fetchGifs = (query = 'dolphins') => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(r => r.json())
      .then(({data}) => {
        this.setState({ gifs: data.map(g => ({ url: g.images.original.url })) })
      })
  }

  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs}/>
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}
