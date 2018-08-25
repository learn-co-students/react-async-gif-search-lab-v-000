import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
export default class GifListContainer extends Component{

    constructor(){
        super()
        this.state = {
            gifs: []
        }
    }

    handleSubmitQuery = (query) => {
        try{
            fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                gifs: data.data.slice(0, 3)
            })
        })
        } catch(e){
            console.error(e)
        }

    }

    render(){
        console.log(this.state.gifs)
        return(
            
            <div>
            <GifSearch handleSubmitQuery={this.handleSubmitQuery}/>
            <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}