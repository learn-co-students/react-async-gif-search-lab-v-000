import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends Component {
  state = {
    gifs: []
  }

  render() {
    return(
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

  componentDidMount() {
    fetchGifs('http://api.giphy.com/v1/gifs/search?q=YOUR%20QUERY%20HERE&api_key=dc6zaTOxFJmzC&rating=g')
      .then(res => res.json())
      .then({data} => {
        this.setState({gifs: data.map(gif => ({url: gif.original.url}) )} )
      })
  }
}

export default GifListContainer;
