import React from 'react';

export default class GifList extends React.Component {
    render() {
        return(
            <div>
                <ul>
                    <li>
                        <img src={this.props.gifs.gifs.url1} alt="gif" />
                    </li>
                    <li>
                        <img src={this.props.gifs.gifs.url2} alt="gif" />
                    </li>
                    <li>
                        <img src={this.props.gifs.gifs.url3} alt="gif" />
                    </li>
                </ul>
            </div>
        )
    }
}