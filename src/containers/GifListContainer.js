import React, { Component } from 'react'
import GifSearch from '../components/GifSearch.js'
import GifList from '../components/GifList.js'

export default class GifListContainer extends Component {

  state = {
    gifs: []
  }

  render() {
    return (
      <div>
        <div>
          <GifSearch search={this.searchGiphy} />
        </div>
        <br />
        <div>
          <GifList results={this.state.gifs} />
        </div>
      </div>
    )
  }

  searchGiphy = (term) => {
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(response => response.json())
    .then(json => json.data.slice(0,3))
    .then(finalThree => {
      this.setState({
        gifs: finalThree
      })
    })
  }

}
