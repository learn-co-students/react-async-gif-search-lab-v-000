import React, { Component } from "react";

class GifList extends Component {


    gifItems = () => {
        var theGifs = this.props.gifs;

        return(
        theGifs.map((gif, index) =>
        <li key={index}><img src={gif}></img></li>    
            )
        )
    }

    render(){
        return(
            <ul>
                {this.gifItems()}
            </ul>
        )
    }
}

export default GifList