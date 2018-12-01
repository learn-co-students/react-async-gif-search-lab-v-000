import React, { Component } from 'react';

import GifList from './GifList';
import GifSearch from './GifSearch';

export default class GifListContainer extends Component {
  constructor() {
    super();
    
    this.state = {
      shortList: []
    };
  }

  getSearch = (data) => {
    this.setState(() => {
      query: data
    })
  }

  getGifs = (data = 'cat') => {
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${data}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(res => res.json())
      .then(({data}) => data.slice(0,3))
      .then(data => {
        this.setState({
          shortList: data.map( gif => gif.images.original.url )
        })
      })
  }

  componentDidMount = () => {
    this.getGifs();
  }

  render() {
    return (
      <div>
        <GifList shortList={this.state.shortList}/>
        <GifSearch getGifs={this.getGifs} />
      </div>
    )
  }
}
