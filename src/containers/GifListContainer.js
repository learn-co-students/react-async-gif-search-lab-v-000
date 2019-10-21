import React, { Component } from "react";
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

  state = {
         gifs: []
     }
//somehow needs to be limited to three gifs

    render(){
      return (
        <div>
          <GifSearch fetchGIFs={this.fetchGIFs} />
          <GifList gifs={this.state.gifs} />
        </div>
          )
    }

    fetchGIFs = (query = "dogs") => {
      fetch('http://api.giphy.com/v1/gifs/search?q={query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3')
        .then(response => response.json())
        .then(data => {
          this.setState({
            gifs: data.images.original.url
          })
        })
    }

    componentDidMount() {
      this.fetchGIFs()
    }
}

export default GifListContainer;
