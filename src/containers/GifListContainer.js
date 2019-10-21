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
        <GifSearch fetchGIFs={this.fetchGIFs}/>
        <GifList gifs={this.state.gifs} />
        </div>
          )
    }

    fetchGIFs = (query = "dogs") => {
      fetch('https://api.giphy.com/v1/gifs/search?q={query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3')
        .then(response => response.json())
        .then(data => {
          console.log(data)
          console.log(data.data)
          this.setState({
            gifs: data.data.map(object => object.images.original.url)
          })
        })
    }

    componentDidMount() {
      this.fetchGIFs()
    }
}

export default GifListContainer;
