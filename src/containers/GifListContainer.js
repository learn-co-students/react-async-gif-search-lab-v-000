import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends Component {

  state = {
    gifs: []
  }

  submitHandle = (event, search) => {
    event.preventDefault();
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=BTyg15u5HhXPfOYw9CCP37y034qwaVeV&rating=g`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        gifs: data.data
      })
    })
  }

  render() {
    return (
      <div>
        < GifSearch submitHandle={this.submitHandle} />
        < GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
