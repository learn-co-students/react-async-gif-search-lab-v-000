import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
export default class GifListContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            giflist: []
        }
    }
    gifFetch = (searchTerm) => {
        fetch("http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g&limit=3")
        .then(res => res.json())
        .then(data => {
            this.setState({
                gifList: data.map((gif)=> {
                    {url: gif.images.original.url}
                })
            })
        })
    }




    render(){
    return (
        <div>
            <GifList gifList={this.state.gifList}/>
            <GifSearch gifFetch={this.gifFetch}/>
        </div>
     )
    }
}