import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {

  state = {
    gifs: []
  };

  handleSubmit = event => {
    event.preventDefault()
       this.fetchGifs(event.target.searchTerm.value)
     }

  fetchGifs = searchTerm => {
      fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=rJjOChieYWqbd7L7FQgUn98WdmLyqkkF&rating=g`)
        .then(response => response.json())
        .then(g => { this.setState({
          gifs: g.data
        })
      })

  }


  render() {
    return (
    <div>
        < GifList g={this.state.gifs} />
       <GifSearch handleSubmit={this.handleSubmit}/>
    </div>
   )
  }
}
export default GifListContainer
