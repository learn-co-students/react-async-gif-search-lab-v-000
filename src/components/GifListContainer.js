import React, { Component } from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'


class GifListContainer extends Component {
    constructor() {
        super()
        this.state = {
            searchTerms: "",
            gifLinks: []
        }
    }
    
    searchHandler = (event) => {
        event.preventDefault()
        this.updateGif()
    }
    
    handleText = (event) => {
        this.setState({
            searchTerms: event.target.value
        })
    }
    
    updateGif() {
        console.log('start')
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerms}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then((resp) => {
            return resp.json()
        })
        .then((data) => {
            var a = []
            data.data.map((gif, index) => {
                console.log(gif)
                if (index <= 2) {a.push(gif.images.original.url)}
            })
            this.setState({
                gifLinks: a
            })
        })
        console.log(this.state.gifLinks)
    }
    
    componentDidMount() {
        this.updateGif()
    }
    
    render() {
        return (<div>
                <GifList gifLinks={this.state.gifLinks}/>
                <GifSearch  handleSub={this.searchHandler} handleText={this.handleText} />
            </div>
            )
    }
}

export default GifListContainer