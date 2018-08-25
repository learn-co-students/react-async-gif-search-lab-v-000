import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
  state = {
    gifs: []
  }

  fetchGIFs = (query = "dogs") => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(response => response.json())
      .then(({data}) => {
        this.setState({
          gifs: data.map(gif => ({url: gif.images.original.url}))
        })
      });
  }

  componentDidMount() {
    this.fetchGIFs();
  }

  render() {
    return (
      <div>
        <GifList gifs={this.state.gifs}/>
        <GifSearch fetchGIFs={this.fetchGIFs}/>
      </div>
    )
  }
}
