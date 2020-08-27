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
  //

// i put it here because this is where the fetchGifs it's calling is located
  componentDidMount(){
  // remember to include parantheses
    this.fetchGifs()
  }


  fetchGifs = (query="dolphins") => {
    // console.log("event target value in GifListCon hS:", event.target)
    return (fetch(`https://api.giphy.com/v1/gifs/search?q=` + `${query}` + `&api_key=XV0KMGghwZpJg9ceQYCSg61l209OnFCi&rating=g&limit=3`)
      .then(res => res.json())
      .then(data => {
        console.log("data", data)
        this.setState({
          gifs: data.map(gif => ({
            url: gif.images.original.url
          }))
        })
      }))
  }


  render(){
    return(
      <div>hi
        <GifList firstThreeGifs={this.state.gifs} />
        <GifSearch fetchGifs={this.fetchGifs} />
      </div>

    )
  }



}

export default GifListContainer
