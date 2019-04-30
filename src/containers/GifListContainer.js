import React, {Component} from 'react'

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component {
state = {
    searchedPicture: []
  }

  fetchGifs(query = "dolphin"){
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}api_key=dc6zaTOxFJmzC&rating=g`)
     .then(response => response.json())
     .then(({data}) => {this.setState({
         searchedPicture: data.map(gif =>({url: gif.images.orginal.url }) 
         ) 
     })
    })
   }

   componentDidMount(){
      this.fetchGifs()
   }

   render (){
    return (
      <div>
          < GifList gifs={this.searchedPicture}  />
          < GifSearch fetchGifs={this.fetchGifs}  />
      </div>
    )
    
   }
}

export default GifListContainer