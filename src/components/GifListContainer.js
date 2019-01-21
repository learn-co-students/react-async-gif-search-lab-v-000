// create your App component here
import GifList from './GifList'
import GifSearch from './GifSearch'
import React, { Component } from 'react';

class GifListContainer extends Component {

  state = {
    gifs: [],
  }

  componentDidMount() {
    fetch("http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g")
    .then(resp => resp.json())
    .then(data => {
      this.setState({gifs: []})
      for (let i = 0; i < 3; i++) {
        this.setState(state => ({
          gifs: [...state.gifs, data.data[i].images.original.url]
        }))
      }
    })
  }

  gifSearch = (searchTerms) => {
    let endpoint = 'http://api.giphy.com/v1/gifs/'
    endpoint += `search?q=${searchTerms}&api_key=dc6zaTOxFJmzC&rating=g`
    fetch(endpoint)
    .then(resp => resp.json())
    .then(data => {
      this.setState({gifs: []})
      for (let i = 0; i < 3; i++) {
        this.setState(state => ({
          gifs: [...state.gifs, data.data[i].images.original.url]
        }))
      }
    })
  }


  render() {

    return (
      <div>
        <GifSearch searchGifs={(searchTerms) => this.gifSearch(searchTerms)}/>
        <GifList data={this.state.gifs} />
      </div>
    )
  }
}

export default GifListContainer;
