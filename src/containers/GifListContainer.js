import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends Component {

    state = {
        gifs:[]
    }

    handleSubmit = (searchQuery) => {
         
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchQuery} HERE&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => resp.json())
        .then(json => {
            let dataDump = json.data;
            let dataSelection = dataDump.slice(0,3)
            
            let gifs = dataSelection.map(data => data.images.original.url)

       
            this.setState({
                gifs: gifs
            })

        })

        console.log(this.state.gifs)
    }

    render() {
        return(
            <div>
                <GifList gifs={this.state.gifs}/>
                <GifSearch handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default GifListContainer


