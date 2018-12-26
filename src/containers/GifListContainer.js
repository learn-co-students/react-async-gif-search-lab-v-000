import React, { Component } from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    constructor(){
        super()
        this.state = {
            gifs: []
        }
    }
    
    submitFn = (query) => {
        try{
            fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(data => {
            debugger
            this.setState({
                gifs: data.data.slice(0, 3)
            })
        })
        } catch(e){
            console.error(e)
        }

    }

    render(){
        return(
        <div>
        <GifList gifs={this.state.gifs}/>
       
        <GifSearch sumbitFn={this.submitFn}/>
        </div>
        )
    }
}