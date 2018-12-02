import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      gifs: [],
    }
  }

  componentDidMount(){
    this.fetchGifs('all')
  }

  // create new function that does the fetch and input query into interval

  fetchGifs = (query) => {
    fetch("http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=dc6zaTOxFJmzC&rating=g")
    .then(resp => resp.json())
    .then(json => {
      this.setState({
          gifs: json.data
        })
    })
  }

  render() {

    return (
      <div>
      <br />
      <GifSearch fetchGifs={this.fetchGifs}/>
      <br />
      <GifList gifs={this.state.gifs} />
      </div>
    )
  }

}

export default GifListContainer
