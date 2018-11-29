import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';


export default class GifListContainer extends Component {
    constructor(){
        super();
        this.state = { images: []}

    }

    getSearchQuery = (searchTerm) => {
        const url = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`
        fetch(url)
        .then(request => request.json())
        .then(d => {
            const first3 = [d.data[0], d.data[1], d.data[2]]
            this.retrieveUrls(first3)
        });
     }

     retrieveUrls = (data) => {
         const images =  data.map(imageObject => {
             return imageObject.images.original.url
         })

         this.setState({images: images});
     }



    render() {
        return (
            <div>
                <GifSearch getSearchQuery={this.getSearchQuery} />
                <GifList images={this.state.images} />
            </div>
        )
    }
}
