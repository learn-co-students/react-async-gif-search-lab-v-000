import React, { Component } from "react";
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

class GifListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [], 
      query:''
    };
  }

  handleSearch=()=> {
      fetch(
        `http://api.giphy.com/v1/gifs/search?q=${
          this.state.query
        }&api_key=dc6zaTOxFJmzC&rating=g&limit=3`
      )
        .then(res => res.json())
        .then(({ data }) => this.setState({ gifs: data.map(gif=>({url: gif.images.original.url}))},() => console.log("this.state.gifs=", this.state.gifs)))
        .catch(err => console.log("Error"));
  }

  handleChange=(e)=> {
    this.setState({ query: e.target.value });
}

  render() {
      return (
        <div>
        <GifSearch handleSearch={this.handleSearch} handleChange={this.handleChange} 
        />
        <GifList gifs={this.state.gifs} />
      </div>
      )
  }

}

export default GifListContainer;
