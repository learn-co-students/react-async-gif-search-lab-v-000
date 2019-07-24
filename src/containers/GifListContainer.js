import React, {Component} from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'


class GifListContainer extends Component {

  state = {gifs: []}

  componentDidMount() {
    fetch("http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g")
    .then(response => response.json())
    .then(data => {this.setState({gifs: data.gifs})})
  }

  handleSubmit = (event) => {
    event.preventdefault()
    console.log(event)
  }

  render() {
    return (
      <div>
      <GifList gifs={this.state.gifs}/>
      <GifSearch handleSubmit={this.handleSubmit}/>
      </div>
    )
  }

}

export default GifListContainer
