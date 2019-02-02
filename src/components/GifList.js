import React, { Component } from 'react';
import shortid from 'shortid';

export default class GifList extends Component {
    handleProps = () => {
        return this.props.gifList.map(gif => { return <li key={shortid.generate()}><img src={gif} alt=""/></li> })
    }
    render() {
        return (
            <ul>
                {this.handleProps()}
            </ul>
        )
    }
}