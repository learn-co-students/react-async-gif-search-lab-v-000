import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {


    state = {
        gifs: []
    }

    componentDidMount() {
        fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=BllXlYYTdXYyBGmAEg3R8M8dG2gFKr43&rating=g`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                gifs: data.data.slice(0, 3)
            })
        })
    }

    handleSearch = (searchTerm) => {
        console.log(searchTerm);
       (fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=BllXlYYTdXYyBGmAEg3R8M8dG2gFKr43&rating=g`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                gifs: data.data.slice(0, 3)
            })
            return
        }))
    }

    render() {
        return (
        <div><GifList gifs={this.state.gifs}/>
        <GifSearch onHandleSearch={this.handleSearch}/></div>
        )
        
    }
}