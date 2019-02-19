// http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g
import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends React.Component{

  state = {gifs: []}

  fetchGifs = (query='pie')=>{
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(resp => resp.json())
      .then(({data}) => {
        this.setState({
          gifs: data.map( gif => ({ url: gif.images.original.url }) )
        })
      })
  }

  componentDidMount(){
    this.fetchGifs()
  }

  render(){
    return(
      <div>
        <GifList gifs={this.state.gifs}/>
        <GifSearch handleFetch={this.fetchGifs}/>
      </div>
    )
  }
}
