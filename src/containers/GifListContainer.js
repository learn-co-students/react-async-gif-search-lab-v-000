import React, { Component } from 'react'
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
  
  state = {
    gifs: []
  }

  render() {
    return (
      <div>
        <div>
          <GifSearch 
            fetchGifs={this.fetchGIFs}/>
        </div>
        <div>
          <GifList 
            gifUrls={this.state.gifs}/>
        </div>
      </div>
    )
  }

  fetchGIFs = (query ="dolphins") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(response => response.json())
    .then(({ data }) => {
      this.setState({
        gifs: data.map( gif => ({ url: gif.images.original.url}) )
      })
    })
  }
  componentDidMount() {
    this.fetchGIFs()
  }
}

export default GifListContainer
