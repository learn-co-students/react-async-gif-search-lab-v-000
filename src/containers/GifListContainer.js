import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends Component {

   state = {
     gifs: []
   }

   searchForGifs = term => {
     fetch('http://api.giphy.com/v1/gifs/search?q='+term+'&api_key=dc6zaTOxFJmzC&rating=g')
     .then(response => response.json())
     .then(({data}) => {
        this.setState({ gifs: data.slice(0,3).map( gif => ({ url: gif.images.original.url }) ) })
      })
   }


   render () {
     return (
       <div>
        <GifList gifs={this.state.gifs}/>
        <GifSearch findGifs={this.searchForGifs} />
       </div>
     )
   }

   componentDidMount(){
     this.searchForGifs()
   }

}
