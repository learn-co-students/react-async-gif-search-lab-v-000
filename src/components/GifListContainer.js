import React, { Component } from 'react';

import GifSearch from './GifSearch'
import GifList from './GifList'

export default class GifListContainer extends Component {

  state = {
    gifs: []
    }

  retrieveGifs(query) {
    debugger
      let a
      a = fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)

        a.then(response => {
          console.log(response)
          return response.json()
        }).then(data => {
          debugger
          let three = [data[0], data[1], data[2]]
          this.setState({
            gifs: three
          })
        })
        debugger
    }



  render() {
    return (
      <div className="">
        <GifSearch retrieveGifs={this.retrieveGifs}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    );
  }
}
