import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component {
    state = {
        gifs: []
    };

    // we use a lifecycle function upon the mounting of the component. THEN we will call handleSearch().
    componentDidMount() {
        this.handleFetchGifs()
    };

    // in this function we'll utilize fetch() to return to us data we can then render
    // q for query
    handleFetchGifs = (q = "batman") => {
        // fetch() from the uri given:
        // let's store our uri first:
        let path = `http://api.giphy.com/v1/gifs/search?q=${q}&api_key=dc6zaTOxFJmzC&rating=g`;
        fetch(path)
            .then(res => res.json())
            .then(g => {
                this.setState({
                    gifs: g.data.slice(0,3).map((gif) => {
                        return gif.images.original.url
                    })
                })
            });
        // here we did 'g' for gifs. Since we only want to store the first 3 gifs, we need to use .slice()
    };

    // now, we're ready to render()

    render() {
        // we will utilize the components we imported: GifSearch and GifList
        return (
            <div>
                <p>All Your Base Are Belong To Us</p>
                <GifSearch handleFetchGifs={this.handleFetchGifs} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}