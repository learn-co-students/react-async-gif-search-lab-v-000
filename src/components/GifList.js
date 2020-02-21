import React from 'react';

export default class GifList extends React.Component {


    render() {
        return (
            <div className="Results">
                <ul>
                    {this.props.gifs.map(gif => <li><img src={gif.images.original.url}/></li>)}
                </ul>
            </div>
        )
    }
}