import React, { Component } from "react";

class GifSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    handleSubmit = (event) => {    
        event.preventDefault()
        this.props.handleSubmit(this.state.value) 
    }


    render () {
        return (
        <form onSubmit={this.handleSubmit}>
            <label>
                Enter a search term:
                <input type="text" value={this.state.value} onChange={event => this.setState({value: event.target.value})} />
            </label>
            <input type="submit" value="Find Gifs" />
        </form>
        );
    }
    //K82mHF1IgNkjrTPXkJy4PDFI0n0xgsjL
    //https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=K82mHF1IgNkjrTPXkJy4PDFI0n0xgsjL&rating=g
    

    //data > 0 > images > original > url
}

export default GifSearch
