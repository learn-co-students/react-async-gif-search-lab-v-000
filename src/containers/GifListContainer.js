import React, {Component} from 'react';

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component{

  state = {
    gifs: []
  };

  fetchGifs = (searchGifs) =>{
    let url = `https://api.giphy.com/v1/gifs/search?q=${searchGifs}&api_key=p39ia85nrFnJyANx4Yyrpp31HGkz2cT0&rating=g&limit=3`
     fetch(url)
        .then(response => response.json())
        .then(({data}) => {
             this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) });
        })
    }

render () {
  return (
    <div>
      <GifList gifs={this.state.gifs}/>
      <GifSearch fetchGifs = {this.fetchGifs} />
     </div>
  )
}


componentDidMount() {
   this.fetchGifs()
 }


}
export default GifListContainer;
