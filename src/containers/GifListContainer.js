import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
export default class GifListContainer extends Component{
  state= {
      gifs: []
  }

//   componentDidMount(input){
//     fetch(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=dc6zaTOxFJmzC&rating=g`)
//     .then(response => response.json())
//     .then(data => {
//       this.setState({gifs: data.data.slice(0, 3) })
//     })
//   }

  handleSubmit = (input) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(response => response.json())
    .then(data => {
      this.setState({gifs: data.data.slice(0, 3) })
    })
  }

    render() {
        return (
            <div>
                <GifList gifList={this.state.gifs}/>
                <GifSearch handleSubmit={this.handleSubmit}/>
            </div>
            )
    }
}