import React, { Component } from 'react';

class GifList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.topGifs.map((gif) => (
                        <li key={gif}><img src={gif} alt="gif"/></li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default GifList; 