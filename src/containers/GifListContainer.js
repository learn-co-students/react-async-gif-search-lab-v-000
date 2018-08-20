import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

 export default class GifListContainer extends Component {

   constructor() {
     super()

     this.state = {
        gifs: []
     }
   }

  getGifs = (query = "whales") => {
     fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
       .then(response => response.json())
       .then(({data}) => {
         this.setState({
           gifs: data.map( gif => ({ url: gif.images.original.url }) )
         })
       })
   }

componentDidMount() {
      this.getGifs()
   }

 render() {
   return (
     <div>
       <GifSearch getGifs={this.getGifs} />
       <GifList gifs={this.state.gifs} />
     </div>
    );
  }
 }
