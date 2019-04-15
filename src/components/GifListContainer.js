import React from 'react'

export default class GifListContainer extends React.component {

    render () {
        return < GifList list={this.state.list} />
    }
}