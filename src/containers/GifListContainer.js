import React from 'react'
import App from '../components/App'
import NavBar from '../components/NavBar'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'



class GifListContainer extends React.Component {

  state = {
    gifs: []
    // gifs = []
  }

  onSubmit = event => {
    console.log("event target value", event.target.value)
    // fetch(`https://api.giphy.com/v1/gifs/search?q=` + `${event.target.value}` + `&api_key=XV0KMGghwZpJg9ceQYCSg61l209OnFCi&rating=g`)
    //   .then(res => res.json())
    //   .then(data => {
    //
    //   })
  }


  render(){
    return(
      <div>hi
        <GifList firstThreeGifs={this.state.gifs} />
        <GifSearch onSubmit={this.onSubmit} />
      </div>

    )
  }



}

export default GifListContainer
