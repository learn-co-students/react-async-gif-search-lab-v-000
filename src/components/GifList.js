import React from 'react'

export default class GifList extends React.Component {

    getUrl(gif) {
        return gif.images.original.url + ".gif";
    }

    render() {
        return (
            <div>
                <h1>Gifs</h1>
                <ul>
                    {this.props.gifs ?
                        this.props.gifs.map(gif => <li><img src={this.getUrl(gif)} alt={gif.url}/></li>)
                        : <p>fetching...</p>
                    }
                </ul>
            </div>
        )
    }
}

