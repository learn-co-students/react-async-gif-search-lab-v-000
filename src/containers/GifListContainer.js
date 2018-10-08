import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
	state = {
		gifs: []
	}

render() {
    return(
      <div>
        <GifSearch getGIFS={this.getGIFS} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }


getGIFS = (searchTerm) => {
  fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(res => res.json())
      .then(({data}) => {
        this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
      })
}

componentDidMount(){
	this.getGIFS()
}



}
