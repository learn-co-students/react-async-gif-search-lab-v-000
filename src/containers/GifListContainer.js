import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GiflistContainer extends Component{
  constructor(){
    super()
    this.state = {
      gifs: []
    }
  }

  componentDidMount(){
    this.searchQuery();
  }

  searchQuery = (search) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp => resp.json())
    .then(({data}) => {
      this.setState({
        gifs: data.map(gif => ({url: gif.images.original.url}))
      })
    })
  }

  render(){
    return(
      <div>
        <GifSearch handleSubmit={this.searchQuery}/>
        <GifList gifs={this.state.gifs}/>

      </div>
    )
  }

}