import React, {Component} from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {
  state = {
    gifs: []
  }

  componentDidMount() {
    this.fetchGifs('dolphin')
  }

  fetchGifs = (searchTerm) => {
    const url = 
      'http://api.giphy.com/v1/gifs/search?q=' +
      searchTerm + 
      '&api_key=dc6zaTOxFJmzC&rating=g'

    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          gifs: [
            data.data[0].url,
            data.data[1].url,
            data.data[2].url
          ]
        })
      })
  }

  render() {
    return (
      <span>
        <GifList gifs={this.state.gifs} />
        <GifSearch fetchGifs={this.fetchGifs} />
      </span>
    );
  }
}

export default GifListContainer
