import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';
class GifListContainer extends Component {

    state = {
        gifs: [],
        searchterm: "trending"
    }

    componentDidMount() {
        // peeked from solution - makese sense! since the function will be used as a prop and referenced here, call it in componentDidMount rather than putting the guts here and calling componentDidMount - seems like bad form
        this.getFetchData()
    }

    getFetchData = searchTerm => {
        console.log(searchTerm)
        const apiKey = 'mqeycUuIOqqwmbaR5Ik12HdBhcFaDItj'

        let apiQry;

        if (searchTerm) {
            apiQry = `search?api_key=${apiKey}&q=${searchTerm}&limit=3&offset=0&rating=g&lang=en`
        } else {
        // initial query
            apiQry = `trending?api_key=${apiKey}&limit=3&rating=g`
            searchTerm = 'trending'
        }

        fetch(`https://api.giphy.com/v1/gifs/${apiQry}`)
            .then(response => response.json())
            // peeked from solution - destructure returned array to second level data element and making each entry an object with key url and value the image url for the specific type we wanted; need to enclose the mapped objects in parentheses so React knows this is an object not something to try to express
            .then(({data}) => {
                this.setState({
                    gifs: data.map(gif => ({url: gif.images.original.url})),
                    searchterm: searchTerm
                })
            })
    }

    render () {
        return (
            <div>
                <GifSearch getFetchData={this.getFetchData} />
                <GifList gifs={this.state.gifs} searchterm={this.state.searchterm} />
            </div>
        )
    }
}

export default GifListContainer;