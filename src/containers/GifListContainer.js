import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';
 export default class GifListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      topThree: [];
    }
  }
   getGifs = (data) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${data.search}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(res => res.json())
      .then(json => {
          const array = json.data.slice(0, 3)
          this.setState({topThree: array})
        }
      )
    }
   render(){
    return (
       <div>
        <GifSearch submit={this.getGifs}/>
        <GifList gifs={this.state.topThree}/>
      </div>
      )
  }
}
