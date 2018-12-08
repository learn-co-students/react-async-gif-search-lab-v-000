import React, {Component} from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component{

  state = {
    gifs: []
  }

  handleSearch = (str) => {
    this.setState({
      gifs: []
    })
    let url = "http://api.giphy.com/v1/gifs/search?q="+str+"&api_key=dc6zaTOxFJmzC&rating=g"
    fetch(url)
      .then(res=>res.json())
      .then(data=>this.setState({
        gifs: data.data.map(gif=>gif.images.original.url)
      }))
  }


  render(){
    return (
      <div>
        <div>
          <GifList gifs={this.state.gifs}/>
        </div>
        <div>
          <GifSearch handleSearch={this.handleSearch}/>
        </div>
      </div>
    )
  }
}

export default GifListContainer
