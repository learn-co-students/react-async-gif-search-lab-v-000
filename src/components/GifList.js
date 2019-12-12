import React, { Component } from 'react'

import GifListContainer from '../containers/GifListContainer'

export default class GifList extends Component {
    render() {
        return (
            <div class="row">
                {this.props.gifs.map(gif => {
                    return <div class="col-md-3"><img src={gif.images.original.url} /></div>
                })}
             </div>
         )
     }
}