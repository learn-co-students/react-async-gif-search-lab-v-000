import React, { Component } from 'react'

class GifList extends Component {

    displayGifs = () => this.props.urls.map((url, id) => <li key={id}><img src={url} alt="another gif"></img></li>)

    render() {
        return (
            <ul>
                {this.displayGifs()}
            </ul>
        )
    }
}

export default GifList