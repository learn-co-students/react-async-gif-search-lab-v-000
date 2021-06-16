import React, {Component} from 'react'

class GifList extends Component {

    render(){
        console.log(this.props)
        return(
        <div>
            <ul>{this.props.gifs.map(x => <img key={x.url} src={x.url} alt=""/>)}</ul>
        </div>
    )}
}

export default GifList