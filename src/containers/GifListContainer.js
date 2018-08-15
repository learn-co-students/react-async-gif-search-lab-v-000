import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    state = {
      storedGifs: []
    }

    render() {
      return (
        <div>
          <GifSearch getGifs={this.getGifs}/>
          <GifList storedGifs={this.state.storedGifs} />
        </div>
      )
    }

    getGifs = (searchTerm ="moose") => {
      fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(({data}) => {
          this.setState({
            storedGifs: data.map(gif => ({ url: gif.images.original.url }) )
          });
        });
    } 

    componentDidMount() {
      this.getGifs()
    }
}

export default GifListContainer
