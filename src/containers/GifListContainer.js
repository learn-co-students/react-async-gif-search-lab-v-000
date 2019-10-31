import React, { Component } from "react";
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {
 constructor(props) {
  super(props);
  this.state = { 
    gif: [] 
  }
 }

 handleSubmit = value => {
   fetch(`http://api.giphy.com/v1/gifs/search?q=${value}&api_key=dc6zaTOxFJmzC&rating=&limit=3`)
      .then(response => response.json())
      .then(({data}) => {
        this.setState({
          gif: data.map(g => ({url: g.images.original.url}))
        })
      })
  }

  componentDidMount() {
    fetch('http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
      .then(response => response.json())
      .then(({data}) => {
        this.setState({
          gif: data.map(g => ({url: g.images.original.url}))
        })
      })
  }

  render() {
    return (
    <React.Fragment>
      <GifList data={this.state.gif}/>
      
      <GifSearch submitHandler={this.handleSubmit}/>
    </React.Fragment>
    )
  }
}

export default GifListContainer;