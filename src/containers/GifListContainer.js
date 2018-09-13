import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {
  state = {
    gifs: []
  }

  fetchGifsFromApi = (query) => {
    const formattedQuery = query
    fetch(`http://api.giphy.com/v1/gifs/search?q=${formattedQuery}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          gifs: [data.data[0], data.data[1], data.data[2]]
        })
      })
  }

  render() {
    return (
      <div>
        <GifSearch onSearchSubmit={this.fetchGifsFromApi}/>
        <GifList foundGifs={this.state.gifs} />
      </div>
    )
  }
}

export default GifListContainer