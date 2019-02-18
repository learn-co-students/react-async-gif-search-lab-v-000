import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

state = {
      gifData: []
  }


fetchGIFs = (textInput = "dolphins") => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${textInput}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          gifData: data.data.map( gif => ({ url: gif.images.original.url}) )
        })
      })
  }

componentDidMount(){
  this.fetchGIFs()
}

render (){
  return (
      <div>
          <GifList gifData={this.state.gifData}/>
        <GifSearch fetchGIFs={this.fetchGIFs} />
      </div>
    )
  }

}

export default GifListContainer

//should pass down a submit handler function to <GifSearch /> as a prop.
//passing that data down to it's child the <GifList> component as a prop
