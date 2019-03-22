import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

  state = {
  	gifs: [],
    search: ""
  }

  fetchGifs = (search) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          gifs: data.data.slice(1,4)
        })
      })
  }

  // componentDidMount() {
  //   this.interval = setInterval(this.fetchGifs, 15000);    
  // }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }


  generateGifs = (gifArray) => {
      return gifArray.map((data, idx) => <GifList key={idx} gif={data} />);
  }

  searchGifs = (search) => {
    this.setState({
      search: search
    })
    this.fetchGifs(search)
  }


  render() {
    console.log("Gifs: ", this.state.gifs)
    return (
    	<div>
       < GifSearch onSearchGifs={this.searchGifs} />
       {this.generateGifs(this.state.gifs)}
    	</div>
    );
  }

}

export default GifListContainer;