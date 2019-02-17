import React, { PureComponent } from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'


export default class GifListContainer extends PureComponent {
    constructor() {
        super()
        
        this.state = { gifs: [] }
    }

    render() {
        return (
            <div>
                <GifSearch submitHandler={this.submitHandler} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }

    getList = (query) => {
        const url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`

        fetch(url)
            .then(resp => resp.json())
            .then(json => {
                this.setState({gifs: json.data.slice(0, 3)})
                console.log(url)
            })
    }

    submitHandler = query => this.getList(query)
}