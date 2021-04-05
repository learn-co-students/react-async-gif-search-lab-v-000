import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GiftListContainer extends React.Component {
    
    state = {
        funnyGifs: []
    }

    handleSubmit = event => {
        event.preventDefault()
        this.fetchGifs(event.target.searchTerm.value)
    }

    fetchGifs = searchTerm => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=bZVbQawd8mqxKOaDPR0Q2q7Pg7EkLAuE&limit=3&offset=0&rating=g&lang=en`)
          .then(response => response.json())
          .then(gifs => {
            this.setState({
              funnyGifs: gifs.data
            })
        })
    }

    render() {
        return (
          <div>
            <GifList gifs={this.state.funnyGifs} />
            <GifSearch handleSubmit={this.handleSubmit}/>
          </div>
        )
    }

      
}