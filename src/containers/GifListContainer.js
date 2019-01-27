import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'


export default class GifListContainer extends Component{

constructor(){
  super()
  this.state={
    data:[]
  }
}

componentDidMount(query){
  fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
  .then(response=> response.json())
  .then(data =>{
    this.setState({
      data: data.data.slice(0,3)
    })
  })
}

searchGif= (query)=>{
  this.componentDidMount(query)
}





  render(){
    return(
      <div>
      <GifSearch searchGif={this.searchGif} />
      <GifList data={this.state.data}/>

      {console.log(this.state.data)}
      Hello
      </div>
    )
  }
}
