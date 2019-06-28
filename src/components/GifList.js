import React, { Component } from 'react';

class GifList extends Component  {
    render(){
        return(
        <ul>
            {this.props.gifList.map(g => (
             <li key={g.id}><img src={g.images.original.url}/></li>
            ))}
        </ul>
        )
    }
}
export default GifList