import React, { Component } from 'react'
import GifList from '../components/GifList'

class GifListContainer extends Component {
  
  state = [{
    gifs: []
  }]

  render() {
    return (
      <div>
        <p>Gif List Container</p>
        <div>
          <GifList 
            gifUrls={this.state.gifs}/>
        </div>
      </div>
    )
  }

  fetchGIFs = (query = "trending") => {
    fetch('https://api.giphy.com/v1/gifs/search?q=trending&api_key=dc6zaTOxFJmzC&rating=g')
    .then(response => response.json())
    .then(({data}) => {
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
