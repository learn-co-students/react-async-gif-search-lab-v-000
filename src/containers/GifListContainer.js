// create your App component here
import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

 state = {
   gif: []
 }

 render() {
   return (
     <div>
       <GifSearch fetchGIFs={this.fetchGIFs} />
       <GifList gifs={this.state.gifs} />
     </div>
   )
 }

 fetchGIFs = (query) => {
   fetch(`http://api.giphy.com/v1/gifs/search?q=${query}api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
     .then(response => response.json())
     .then(data => {
       this.setState({
          gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
       })
     }


 componentDidMount() {
  this.fetchGIFs()
}

}


export default GifListContainer
