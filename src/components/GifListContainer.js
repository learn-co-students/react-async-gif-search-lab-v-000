import React, { Component } from React 

export default class GifListContainer extends Component {
    constructor(){
        super(){
            this.state({
                query: "",
                gifs: []
            })
        }
    }
    componentDidMount(){
        fetch(`http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(data => this.setState({ gifs: data[0-2]}))
    }

    submitFn = (event) => {
        event.preventDefault()
        this.setState({query: event.target.value})
    }

    render(){
        return(
        <div>
        <GifList gifs={this.state.gifs}/>
        </div>
        <div>
        <GifSearch sumbitFn={this.submitFn}/>
        </div>
        )
    }
}