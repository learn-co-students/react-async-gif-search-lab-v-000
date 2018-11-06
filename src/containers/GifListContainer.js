import React, { Component } from 'react';
import GifList from './components/GifList'
import GifSearch from './components/GifSearch'

class GifListContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      gifs: []
    }
  }

  componentDidMount() {
    fetch('http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
    .then(response => response.json())
	      .then(data => {
	        this.setState({
	          gifs: data.images.original.url
	        })
	      })

  }


  render() {
    return (
      <div>
        <GifList gifs={this.state}/>
        <GifSearch onSubmit={this.handleSubmit}/>
      </div>
    )
  }


}

export default GifListContainer;
