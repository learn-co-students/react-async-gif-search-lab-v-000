import React from 'react';

import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      gifs: []
    }
  }

  componentDidMount() {
    // calls the API to provide a sample
    this.fetchInput()
  }

  render() {
    return(
      <div>
        <GifSearch fetchInput={this.fetchInput} />
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }

  fetchInput = (input = 'clown') => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(response => response.json())
    .then(data => {
      let gifs = data.data.slice(0,3)
      this.setState({gifs: gifs})
    })
  }
}

export default GifListContainer;
