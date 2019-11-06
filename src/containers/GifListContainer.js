
import React, { Component } from 'react'
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';
 
class GifListContainer extends Component {
 
  state = {
    gifs: []
  }
 
  render() {
    return (
      <div>
        < GifList gifs={this.state.gifs}/>
        <GifSearch fetchGIFs={this.fetchGIFs} />
      </div>
    )
  }
 
 fetchGIFs = (query = "dolphins") => {
  fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
    .then(res => res.json())
    .then(({data}) => {
      this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
    })
}

componentDidMount() {
  this.fetchGIFs()
}

}

export default GifListContainer


//.slice(0, 3)
 
/*componentDidMount(query) {
 // const query = "dolphins"
   const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`
 fetch(url)
   .then(response => response.json())
   .then(({data}) => {
    this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ).slice(0, 3) })
  })
}

}

export default GifListContainer
*/