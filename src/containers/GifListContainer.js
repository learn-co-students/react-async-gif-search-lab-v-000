import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      gifs: []
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    const query = event.target.children[0].value
    this.componentDidMount(query)
  }

  componentDidMount(query) {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp => resp.json())
    .then(gifs => this.setState({ gifs: gifs.data.slice(0, 3) }))
  }

  render(){
    return(
      <div>
        <GifList gifs={this.state.gifs} />
        <GifSearch submit={this.handleSubmit}/>
      </div>
    )
  }

}

export default GifListContainer
