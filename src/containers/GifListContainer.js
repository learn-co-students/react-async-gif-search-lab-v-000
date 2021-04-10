import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    constructor() {
        super();

        this.state = {
        gifObjs: []
        }
    }

    componentDidMount() {
        this.gifSearchCb()
    }

    render() {
        return (
            <div>
                <GifSearch gifSearchCb={this.gifSearchCb}/>
                <GifList gifObjs={this.state.gifObjs}/>
            </div>
        )
    }

    gifSearchCb = (query = 'dolphin') => {

        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(json => {
            console.log(json.data.slice(0, 3))
            this.setState({
                gifObjs: json.data.slice(0, 3)
            })
        })
    }
}

export default GifListContainer