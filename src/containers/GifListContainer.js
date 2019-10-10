import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends React.Component {

  state = {
    gifs: []
  }

  // handleSubmit = () => {
  //   console.log("The submit button has been clicked!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
  // }

  // handleResponce = (response) => {
  //   response.data.map(gif => gif.url)
  // }



  handleSubmit = (term) =>  {
    // debugger

    // fetch('http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
    fetch(`http://api.giphy.com/v1/gifs/search?q=${term}s&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
        .then( ({data}) => {
        // this.setState({ gifs: data.map( gif => ({ url: console.log(gif.images.original.url) }) ) })
        this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })

      })

  }

  render() {
    return (
      <div>
      <GifSearch handleSubmit={this.handleSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

}

export default GifListContainer;
