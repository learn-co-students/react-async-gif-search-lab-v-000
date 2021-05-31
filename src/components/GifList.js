import React, { Component } from 'react';

class GifList extends Component {

    createGifList = () => {
        return this.props.gifs.map(gif => {
            return <li><img src={gif.url}/></li>
        })
    }

    render() {
        return (
            <div>
                <h2>Top 3 results for {this.props.searchterm}</h2>
                <ul style={{listStyleType: "none"}}>
                    {this.createGifList()}
                </ul>
            </div>
        )
    }
}

export default GifList;