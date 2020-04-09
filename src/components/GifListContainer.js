import React, { Component } from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'


class GifListContainer extends Component{
  state={
    gifs: []
  }

  componentDidMount(){
    this.fetchGifs()
  }

  fetchGifs =(query='dogs')=>{
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=yKOhyoCOJYeGfOiUKX0N4rRjji52Tntc&rating=g`)
    .then(response => response.json())
    .then(info => this.setState({
      gifs: info.data.map(pic => pic.images.original.url)
    }))
  }


  render(){
    return(

      <div>
      <GifList gifs={this.state.gifs}/>
        <GifSearch fetchGifs={this.fetchGifs}/>
      </div>
    )
  }
}

export default GifListContainer
