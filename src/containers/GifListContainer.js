import React, { Component } from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {

  state = {
    gifs: []
  }

  handleSubmit = (input) => {
    fetch('http://api.giphy.com/v1/gifs/search?q=' + input + '&api_key=dc6zaTOxFJmzC&rating=g')
      .then(response => response.json())
      .then(({data}) => {
        this.setState(
          { gifs: data.map( gif => ({ url: gif.images.original.url }) ) }
        )
      })
      console.log(this.state.gifs)
  }

  componentDidMount() {
    this.handleSubmit()
  }



  render() {
    return (
      <div>
        <GifSearch handleSubmit={this.handleSubmit}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )

  }

}
