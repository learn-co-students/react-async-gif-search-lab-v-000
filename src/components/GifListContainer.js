import React, { Component } from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'


class GifListContainer extends Component{
let url = "https://api.giphy.com/v1/gifs/search?q={this.state}&api_key=yKOhyoCOJYeGfOiUKX0N4rRjji52Tntc&rating=g"
  state={
    gifs: []
  }

  componentDidMount(){
    fetch('https://api.giphy.com/v1/gifs/search?q=dog&api_key=yKOhyoCOJYeGfOiUKX0N4rRjji52Tntc&rating=g')
    .then(response => response.json())
    .then(info => info.data.map(pic => this.setState({gifs: [pic.images.original.url]})
      )
    )
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch('the server URL', {
      method: "POST",
      headers: {
        'Content-Type: application/json'
      },
      body: JSON.stringify(this.state)
    })
  }

  render(){
    return(

      <div>
      <GifList gifs={this.state.gifs}/>
        <GifSearch/>
      </div>
    )
  }
}

export default GifListContainer
