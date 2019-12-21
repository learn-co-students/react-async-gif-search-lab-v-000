import React from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

  constructor(props) {

    super()
    this.state = {
      data:""
    }
  }


  getTheGifs(value){
    fetch(`https://api.giphy.com/v1/gifs/search?q=${value}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(res => res.json())
      .then(json => this.setState({data: json}))
        debugger
  }



  handleSubmit = (event) => {
    //debugger

    //event.persist()
    event.preventDefault()
    this.getTheGifs(event.target[0].value)


    // fetch(`https://api.giphy.com/v1/gifs/search?q=${event.target[0].value}&api_key=dc6zaTOxFJmzC&rating=g`)
    //   .then(res => res.json())
    //   .then(json => this.setState({data: json}))






      // .then(response => response.json())
      // .then(gifs => {
      //   this.setState({
      //     data: gifs
      //   })})


  }




  render(){
    return(
      <div>
        <GifList data={this.state.data} />
        <GifSearch handleSubmit={this.handleSubmit} />
      </div>

    )
  }
}

export default GifListContainer
