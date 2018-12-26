import React, { Component } from React 

export default class GifList extends Component {
    constructor(){
        super(){
            this.state({
                query: "",
                gifs: []
            })
        }
    }
    

 

    render(){
        
        return(
        <ul>
            {this.props.gifs.map(gif => `<li> gif.url </li>`)}

        </ul>

        )
    }
}