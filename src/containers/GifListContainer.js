import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
  state = {
    gifs: []
  }

  render() {
    return(
      <div>
      <GifSearch fetchGifs={this.fetchGifs}/>
      <GifList gifs={this.state.gifs} />
      </div>
    )
  }

  fetchGifs = (query = "dolphins") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`), {
      mode: 'cors',
      headers: {'Access-Control-Allow-Origin':'*'}
      .then(res => res.json())
      .then({data}) => {
        this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url}) ) });
        })
      });
    }

  componentDidMount() {
    this.fetchGifs()
  }
}


export default GifListContainer
