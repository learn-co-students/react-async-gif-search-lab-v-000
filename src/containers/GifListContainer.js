import React from 'react';

import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

export default class GifListContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      gifs: []
    }
  }

  componentDidMount() {
    fetch(`http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp => resp.json())
    .then(json => this.setState({gifs: this.parseImages(json)}))
  }

  parseImages = (json) => {
    // debugger;
    return json.data.map(gif => {
      return gif.images.original.url;
    });
  }

  handleSubmit = () => {

  }

  render() {
    return(
      <div>
        <GifList gifs={this.state.gifs} />
        <GifSearch handleSubmit={this.handleSubmit} />
      </div>
    )
  }
} 