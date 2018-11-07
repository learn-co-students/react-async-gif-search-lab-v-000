import React, {Component} from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      gifs: []
    }
  }

  searchHandler = (input) => {
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${input}&api_key=dc6zaTOxFJmzC&rating=g`).then(
        resp => resp.json()).then(
        gifsData => this.setState({
          gifs: gifsData.data.slice(0, 3)
        }))
  }

  render() {
    return (
      <div>
        <GifList gifs={this.state.gifs} />
        <GifSearch submitHandler={this.searchHandler} />
      </div>
    )
  }
}
