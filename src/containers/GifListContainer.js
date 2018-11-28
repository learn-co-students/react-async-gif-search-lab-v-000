import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

  state = {
    gifs: []
  }

  handleSubmit = (searchTerm) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(response => response.json())
      .then(({data}) => {
        this.setState({
          gifs: data.map(gif => ({url: gif.images.original.url}))
        })
      })
  }

  render() {
    return (
      <div>
      <GifSearch handleSubmit={this.handleSubmit}/>
      <GifList gifs={this.state.gifs}/>
      </div>

    )
  }

  componentDidMount() {
    this.handleSubmit()
  }

}
