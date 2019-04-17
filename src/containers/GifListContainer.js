import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {
  state = {
    threeGIFs: [],
    searchQuery: ''
   };

  // sendToGifList = () => {
  //   debugger
  //   return(
  //     <GifList threeGIFs={this.state.threeGIFs} />
  //   )
  // }

  handleSubmit = (value) => {
    this.setState({
      searchQuery: value
    },
    () =>
      fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchQuery}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(data => this.setState({threeGIFs: [data["data"][0].images.original.url, data["data"][1].images.original.url, data["data"][2].images.original.url]}))
    )
  }

  render() {
    return(
      <div>
        <GifSearch handleSubmit={this.handleSubmit}/>
        <GifList threeGIFs={this.state.threeGIFs} />
      </div>
    )
  }

}



export default GifListContainer
