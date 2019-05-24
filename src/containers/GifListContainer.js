import React from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends React.Component {
  state = { gifs: [],
   };

  fetchGifs = (search) => {
    const key = process.env.REACT_APP_API_KEY
    fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&rating=g&limit=3`)
      .then(response => response.json())
      .then(({data}) => {
        this.setState({ gifs: data.map(gif => ({url: gif.images.original.url})) })

        })
  }

  componentDidMount() {
    this.fetchGifs("llama");
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
export default GifListContainer
