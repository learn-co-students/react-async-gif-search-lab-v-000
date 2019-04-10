import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
  state = {
    search: '',
    listOfGifs: []
  }

  onChangeType = (event) =>{
    this.setState({
      search: event.target.value
    })
  }

  onFindGifClick = () =>{
    //Add Limit is 3 to end of URL as for Api
    let searchURL = `http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`;
    fetch(searchURL)
    .then(response => response.json())
    .then(({data}) => {
        this.setState({ listOfGifs: data.map( gif => ({ url: gif.images.original.url }) ) })
      })
  }

  render(){
    return(
      <div>
        <GifList gifs={this.state.listOfGifs}/>
        <GifSearch onChangeType={this.onChangeType} onFindGifClick={this.onFindGifClick}/>
      </div>
    )
  }

}
export default GifListContainer
