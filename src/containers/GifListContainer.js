import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends React.Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      gifs: []
    }
  }

  handleSubmit = (query) => {
    console.log("top-level:", this);
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(resp => resp.json())
      .then(json => {
        let gif_list = [];
        for(let i=0; i<3; i++){
          gif_list.push(json["data"][i]);
        }
        this.setState({
          gifs: gif_list
        });
      });
  }

  render() {
    return(
      <div>
        < GifList gifs={this.state.gifs} />
        < GifSearch handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default GifListContainer;