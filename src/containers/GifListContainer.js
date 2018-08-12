import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';
const API = 'http://api.giphy.com/v1/gifs/search?q=';
const KEY = '&api_key=dc6zaTOxFJmzC&rating=g'

class GifListContainer extends Component {
  constructor(props){
    super()

    this.state =({
      gifs: [],
      searchValue: '',
    })
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  getResults() {
    let query = this.state.searchValue;
    console.log('query is', query)
    fetch(API + query + KEY)
      .then(response => response.json())
      .then(data => this.setState({
        gifs: data.data.slice(0,3),
      }))
  }

  handleChange(event) {
    this.setState({
      searchValue: event.target.value,
    })
  }

  handleSubmit(event) {
    this.getResults();
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <GifSearch handleChange={this.handleChange} handleSubmit={this.handleSubmit} searchValue={this.state.searchValue} />
      <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}

export default GifListContainer
