import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
class GifListContainer extends React.Component {

  state = {
    gifs: []
  }

  fetchGIFs = (search) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(data => this.setState({gifs: data["data"].slice(0, 3)}))
  }

  componentDidMount() {
    this.fetchGIFs()
    //Waiting for state change to be resolved, any container must be rerendered when state changes
    //GifListContainer is the parent of GifSearch
  }

  render() {
    return (
      <div>
        < GifList gifs={this.state.gifs}/>
        < GifSearch fetchGIFs={this.fetchGIFs}/>
      </div>
    )
  }

  componentDidMount() {

  }
}

export default GifListContainer
