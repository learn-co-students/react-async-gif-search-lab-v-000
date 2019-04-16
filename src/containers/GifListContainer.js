import React from 'react'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
  state = {
    threeGIFs: [],
    searchQuery: ''
   };

  handleSubmit = (value) => {
    let url;
    this.setState({
      searchQuery: value
    },
      () => {
        url = `http://api.giphy.com/v1/gifs/search?q=${this.state.searchQuery}&api_key=dc6zaTOxFJmzC&rating=g`
        fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
      }
    )
  }

  render() {
    return(
      <div>
        <GifSearch handleSubmit={this.handleSubmit}/>
      </div>
    )
  }

}

export default GifListContainer
