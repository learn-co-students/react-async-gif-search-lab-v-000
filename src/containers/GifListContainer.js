import React, { Component } from 'react'
import GifList from '../components/GifList'

class GifListContainer extends Component {

    state = {
        gifObjs: []
    }

    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=dc6zaTOxFJmzC&rating=g')
        .then(res => res.json())
        .then(json => {
            console.log(json.data.slice(0, 3))
            this.setState({
                gifObjs: json.data.slice(0, 3)
            })
        })
    }

    render() {
        return (

            <GifList gifObjs={this.state.gifObjs}/>
        )
    }
}

export default GifListContainer