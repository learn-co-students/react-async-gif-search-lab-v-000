import React, { Component } from 'react'
export default class GifList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.generateList()}
                </ul>
            </div>
        )
    }
    generateList() {
        return this.props.gifs.map(gif => <li><iframe src={gif.embed_url} title={gif.title} /></li>)
    }
} 