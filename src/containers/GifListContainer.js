import React, { Component } from 'react'

import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch'

// A container does data fetching and then renders its corresponding sub-component.
export default class GifListContainer extends Component {
  constructor() {
    super()
    this.state = {
      gifs: [],
    }
  }

  // componentDidMount() {
  //   fetch('http://api.giphy.com/v1/gifs/search?q=YOUR%20QUERY%20HERE&api_key=dc6zaTOxFJmzC&rating=g')
  //     .then(response => response.json() )
  //     .then(data => {
  //       let subData = data.data
  //       let firstThree = subData.slice(0,3).map(gifData => {
  //         return gifData.images.original.url
  //       })

  //       this.setState({
  //         gifs: firstThree,
  //       })
  //     });
  // }

  fetchGifs = (query) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState({ gifs: data.data.slice(0, 3).map(gifData => {
          return gifData.images.original.url
        }) 
      })
    })
  }

  render() {
    return(
      <div>
        <GifSearch fetchGifs={this.fetchGifs}/>
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

}

// In our app the <GifListContainer /> 
// will be responsible for fetching the data from the giphy api, 
// storing the first 3 gifs from the response in it's component state, 
// and passing that data down to it's child the <GifList> component as a prop.

// It will also render a <GifSearch /> component that renders the form. 
// <GifListContainer /> should pass down a submit handler function to <GifSearch /> as a prop.