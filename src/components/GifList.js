import React, { Component } from 'react'

class GifList extends Component {

    render() {
        return <div>
            {console.log(this.props.gifObjs)}

                    <img src={this.props.gifObjs.map(gifObj => gifObj.images.original.url)} alt='animal gif'/>

        </div>
    }

}

export default GifList