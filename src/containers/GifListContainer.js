//responsible for fetching the data from the giphy api, storing the first 3 gifs from the response in it's component state, and passing that data down to it's child the <GifList> component as a prop.

//It will also render a <GifSearch /> component that renders the form. <GifListContainer /> should pass down a submit handler function to <GifSearch /> as a prop.

import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

  state = {
    gifList: []
  }

  handleSubmit = (search) => {
    console.log(search)
    fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(data => {
        let firstThree = data.data.slice(0, 3)
        this.setState({
          gifList: firstThree
        })
      })//end fetch
  }



  render() {

    return(
      <div>

      < GifSearch handleSubmit={this.handleSubmit}/>

        <ul>{this.state.gifList.map((gif,index) => <li key={index} > < GifList gif={gif} /> </li>)} </ul>


      </div>
    )
  }

}

export default GifListContainer;
