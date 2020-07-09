import React, {Component} from 'react'
//need to import components calling, not other way around
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'


export default class GifListContainer extends Component {

  state = {
    gifs: []
  }

  fetchGifs = (query="") => {
    //api request
    //store first three gifs
    //need to get search term from gif search
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(data => {
        //fails if not enough gifs
        if (data.data === undefined) {
          console.log("no gifs")
        }
        else if (data.data.length > 3) {
          const sliced = data.data.slice(0, 3)
          this.setState({
            gifs: sliced
          })
        } else {
          this.setState({
            gifs: data.data
          })
        }

      })

  }

  handleSubmit = (event) => {
    
    //actually should have passed in state, not the event to be true controlled component
    
    //store query to state here
    //access query in fetch from state
    event.preventDefault()
    const query = event.target.children[0].value
    this.fetchGifs(query)
    // this.setState({
    //   gifs: ...this.state.gifs,
    //   query: event.target.children[0].value
    // }) was having issues with accessing state here

  }

//GifList loads list of gifs, so want to pass all gifs
  render() {
    return (
      <div>
      <GifSearch handleSubmit={this.handleSubmit}/>
      <GifList gifs={this.state.gifs} />
      </div>
    )
  }


  componentDidMount() {
    this.fetchGifs()


  }
}
