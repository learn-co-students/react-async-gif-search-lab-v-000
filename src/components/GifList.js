import React, {Component} from 'react'
import '../containers/GifListContainer'

export default class GifList extends Component {
    constructor(props){
        super(props)
    }

    render(){
        
        return(
            <div>
                {this.props.images.map(image => <img src={image.images.original.url} />)}
            </div>
        )
    }
}