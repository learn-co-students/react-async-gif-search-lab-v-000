import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component{

  state = {
    gifs: []
  }

  render(){
    return(
      <div>
        <GifSearch onSubmit={this.fetch}/>
        <GifList gifs={this.state.gifs}/>

      </div>
    )
  }

  fetch = (value) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${value}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(response => response.json())
    .then(json => {
        this.setState({
          gifs: json.data.slice(0,3)
        })
      })
  }
}
export default GifListContainer
