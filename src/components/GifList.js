import React, { Component } from 'react'

class GifList extends Component {

    render() {
        return (
        <div>
            {/* {console.log(this.props.gifObjs)} */}
            <ul>
                {this.props.gifObjs.map(gifObj => 
                    <li>
                        <img key={gifObj.id} src={gifObj.images.original.url} alt='gif'/>
                    </li>)}
            </ul>

        </div>
                )
    }

}

export default GifList