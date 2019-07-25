import React, {Component} from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'


class GifListContainer extends Component {

  state = {gifs: []}

  componentDidMount() {
    this.handleFetch()
  }

  handleFetch = (search = "cat") => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(response => response.json())

    .then(data => {this.setState({gifs: data.data.map( gif => ({ url: gif.images.original.url }) ).slice(0, 3) })
  })
}

  render() {
    return (
      <div>
      <GifList gifs={this.state.gifs}/>
      <GifSearch handleFetch={this.handleFetch}/>
      </div>
    )
  }

}

export default GifListContainer
