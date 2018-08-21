import React, { Component } from 'react';

export default class GifList extends Component {

    // Render the gifs (as images)
    render() {
        return (
          <div className="giflist">
            <ul>{this.props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif"/>)}</ul>
          </div>
        );
    }
}
