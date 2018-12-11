import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

  state = { gifs: []};

  render(){
    console.log(this.state.gifs)
    return(
      <div>
        <GifList gifs={this.state.gifs}/>
        <GifSearch fetchImages={this.fetchImages}/>
      </div>
    )
  }

fetchImages = (keyword = "rocket") => {

  fetch(`http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
  .then(response => response.json())
  .then(({data}) => {
    this.setState({gifs: data.map(gif => ({gif: gif.images.original.url}) ) })
})

}



  componentDidMount() {
  this.fetchImages()
}
}
export default GifListContainer
