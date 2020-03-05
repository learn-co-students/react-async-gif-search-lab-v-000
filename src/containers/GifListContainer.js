import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      urls: []
    }
  }

  fetchGifs = search => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp => resp.json())
    .then(gifs => {
      let arr = gifs.data.slice(0, 3)
      this.setState({
        urls: arr.map(gif => gif.images.original.url)
      })
    })
  }

  handleSubmit = search => {
    this.fetchGifs(search)
  }

  render() {
    return(
      <div>
        < GifSearch handleSubmit={this.handleSubmit}/>
        < GifList urls={this.state.urls} />
      </div>
    )
  }
}
