import React, { Component } from 'react';

export default class GifList extends Component {

    // here we only need to render information coming down from GifListContainer:

    // we must remember the information and what we're calling the props from above, ie., GifListContainer. 
    // in this case the props are called 'gifs'
    render() {
        return (
            <div>
                <ul>
                    {this.props.gifs.map(gif => <li><img key={gif.url} src={gif.url} alt="gif" className="img-responsive" /></li>)}
                </ul>
            </div>
        )
    }
}