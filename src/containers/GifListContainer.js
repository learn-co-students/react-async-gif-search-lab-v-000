import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      gifs: []
    }
  }

  gifArray = () => {
    return this.state.gifs.map((gif) => { return {...gif} })
  }

  // componentDidMount() {
  //   fetch('http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
  //   .then(response => response.json())
	//       .then(data => {
	//         this.setState({
	//           gifs: [data.data[0], data.data[1], data.data[2]]
	//         })
	//       })
  // }

    handleSubmit = (data) => {
      console.log(data)
      fetch(`http://api.giphy.com/v1/gifs/search?q=${data.search}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
  	      .then(data => {
  	        this.setState({
  	          gifs: [data.data[0], data.data[1], data.data[2]]
  	        })
  	   })
    }

  render() {
    return (
      <div>
        <GifList gifs={this.gifArray()}/>
        <GifSearch handleSubmit={this.handleSubmit}/>
      </div>
    )
  }


}

export default GifListContainer;
