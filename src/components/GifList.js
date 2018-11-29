import React, { Component } from 'react';

export default class GifList extends Component {

    renderImages = () => {
        if (this.props.images){
            return this.props.images.map(i => {
                return <li>
                            <img src={i} class='imgStyle' alt="don't know" />
                        </li>
            })
        }
    }

    render() {
        return (
            <div className='GifList'>GifList
                <ul>
                    {this.renderImages()}
                </ul>
            </div>
        )
    }
}
