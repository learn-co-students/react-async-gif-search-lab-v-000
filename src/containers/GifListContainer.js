import React, { Component } from 'react'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {

    constructor() {
        super()
        this.state = {
            gifs: []
        }
    }

    componentDidMount() {
        fetch("http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g")
        .then(resp => resp.json())
        .then(({data}) => {
            let firstThree = data.slice(0,3)
            this.setState({gifs: firstThree})
        })
    }


    render() {
        return (
            <GifList gifs={this.state.gifs} />
        )
    }
}