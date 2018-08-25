import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component{

  state={
    results: [],
    query: ''
  }

  fetchGifs = () => {
    fetch("http://api.giphy.com/v1/gifs/search?q=" + this.state.query + "&api_key=dc6zaTOxFJmzC&rating=g")
    .then(resp => resp.json())
    .then(({data}) => {
      this.setState({
        results: data.map((gif) => (
          { url: gif.images.original.url }
        ))
      })
    })
  }

  componentDidMount(){
    this.fetchGifs();
  }

  handleQueryChange = (query) => {
    this.setState({
      query: query
    })
    this.fetchGifs();
  }

  render(){
    return(
      <div>
        <GifSearch handleQueryChange={this.handleQueryChange}/>
        <GifList gifs={this.state.results}/>
      </div>
    )
  }
}

export default GifListContainer;
