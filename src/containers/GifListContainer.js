import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

  state = {
    gifs: []
  }

  fetchGifs = (query) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=6lSmXPXc6Lp2KK3ngPemryl5aKLfSWQc&rating=g&limit=3`)
      .then(res => res.json())
      .then(({data}) => {
        this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
      })
  }

  componentDidMount() {
    this.fetchGifs()
  }

  render() {
    return(
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <ul>
          {this.state.gifs.map(gif => (
            <GifList gifURL={gif.url} key={gif.url} />
          ))}
        </ul>
      </div>
    )
  }

}

export default GifListContainer
