import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
class GifListContainer extends Component {

  state={
  		gifs:[],
      
  	}


setSearch = (term) =>{

  fetch(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        gifs: data.data.slice(0,3)
      })
    })
}

  	render() {
      return (
      <div className="App">
      < GifSearch callBack={this.setSearch} />
      < GifList gifs={this.state.gifs}/>
      </div>
    )}

}
export default GifListContainer;
