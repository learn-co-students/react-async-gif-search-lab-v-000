 import React from 'react';

 import GifList from '../components/GifList'
 import GifSearch from '../components/GifSearch'

 class GifListContainer extends React.Component {

   constructor() {
     super();

     this.state = {
       search: "",
       firstThreeGifs: []
     };
   }

  componentDidMount() {
    fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=d3Ae9416zuxiI6KBOXLpxoZwYJUKVbEx&rating=g')
     .then(response => response.json())
     .then(({data}) => {
       this.setState({firstThreeGifs: data.map(gif => ({url: gif.images.original.url})).splice(0, 3)})
     })
  }

 handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    fetch("https://api.giphy.com/v1/gifs/search?q=" + this.state.search + "&api_key=d3Ae9416zuxiI6KBOXLpxoZwYJUKVbEx&rating=g")
     .then(response => response.json())
     .then(({data}) => {
       this.setState({firstThreeGifs: data.map(gif => ({url: gif.images.original.url})).splice(0, 3)})
     })
   }

   render() {
     return (
       <div>
         <GifSearch submit={this.handleSubmit} change={this.handleChange} search={this.state.search} />
         <GifList gifs={this.state.firstThreeGifs} />

       </div>
     );
   }

 }

 export default GifListContainer;
