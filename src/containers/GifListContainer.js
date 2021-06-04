import React, { Component } from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component {

    state = {
        gifs: []
    }


  
    
   newUrl = (searchTerm) =>{ 
       
       return `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=Glp0jeGuPW9MqxuJ34KlJenUMA9pHxoX&rating=g`
   }


   

fetchGIFs = (searchTerm) => {
   
    fetch(this.newUrl(searchTerm))
    .then(response => response.json())
    .then(gifs => {
      console.log(gifs.data)
      this.setState({gifs: gifs.data})
      
    })
  }

  componentDidMount() {
    this.fetchGIFs()
  }

 render(){
   
        // return <button nothing={this.fetchGifs('cat')}>Click Me</button>;


        return(
               <div>
                   <GifSearch fetchGIFs={this.fetchGIFs} />
                   <GifList gifs={this.state.gifs} />          
               </div>


        )
       
 }


}
export default GifListContainer




