import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

  state = {
    gifs: []
  }

  render() {
    return(
      <div>
        <GifSearch onSearch={this.onSearch} />
        <GifList gifs={this.state.gifs} />
      </div>
      )
  }

  onSearch = (query = "dolphins)") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(res => res.json())
      .then(({data}) => {
        console.log("fetched data: ", {data})
        this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
      })
        // .then(function(response) {
        //   console.log("fetchd 1: ", response)
        //   return response.json();
        // })
        // .then(function(data) {
        //   console.log("fetchd 2: ", data)
        //   debugger
          //why error?
          // GifListContainer.js: 33 Uncaught(in promise) TypeError: Cannot read property 'setState' of undefined
        //   this.setState({ gifs: data.data.map(gif => ({ url: gif.images.original.url })) })
        // })
  }

  ComponentDidMount() {
    this.onSearch()
  }
}

export default GifListContainer