import React, { Component } from "react";

class GifSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {    
        this.setState({value: event.target.value});  
    }


    render () {
        return (
        <form>
            <label>
                Enter a search term:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
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
