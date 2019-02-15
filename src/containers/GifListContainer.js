import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends Component {
  constructor(){
    super();
    this.state = {
      gifLists: []
    };
  }

  componentDidMount(){
    this.fetchGifs("dolphin")
  }

  fetchGifs = (term) => {
    fetch("http://api.giphy.com/v1/gifs/search?q=" + term + "&api_key=dc6zaTOxFJmzC&rating=g")
    .then(resp => resp.json())
    // .then(resp => this)
    .then(resp => this.setState({gifLists: resp.data.slice(0,3)}))
  }

  render(){
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs}/>
        <GifList gifLists={this.state.gifLists}/>
      </div>
    )
  }
}