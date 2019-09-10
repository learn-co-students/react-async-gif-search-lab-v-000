import React, { Component } from 'react';

import GifSearch from './GifSearch'
import GifList from './GifList'

export default class GifListContainer extends Component {

  state = {
    gifs: []
    }

  retrieveGifs = (query) => {
    console.log(query)
      fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
          .then(data => {

          let three = [data["data"][0]["images"]["original"]["url"], data["data"][1]["images"]["original"]["url"], data["data"][2]["images"]["original"]["url"]]

          this.setState({
            gifs: three
          })
        })

    }

    componentDidMount() {
    }

  render() {
    return (
      <div className="">
        <GifSearch retrieveGifs={this.retrieveGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}
