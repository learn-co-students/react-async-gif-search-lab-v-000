import React, { Component } from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

export default class GifListContainer extends Component {
   
  constructor(){
    super();
    this.state = {
      gifList : []
    }
  }

  sendQuery = (query) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json())
    .then(({data}) => {
      this.setState({gifList: data.map(gif => ({
        url: gif.images.original.url
      }))})
    })
  }
  componentDidMount(){
   this.sendQuery()
  }

  render(){
    return <div>
        <GifSearch sendQuery={this.sendQuery} />
        <GifList gifs={this.state.gifList}/>
        
      </div>
    
  }


}