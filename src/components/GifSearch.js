import React, { Component } from 'react'

export default class GifSearch extends Component {

    state = {
        query: ""
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.fetchGIFs(this.state.query);
        //  We need to think of props as the 'state' passed by it's parent. In this case, since we mount GifSearch 'into' GifListContainer,
        // we need to get the information we are submitting. These are props.
    };

    handleChange = e => {
        // here, we only need to keep the state up-to-date with our user's demands:
        this.setState({
            query: e.target.value
        });
    };
    
    // here is the actual component we're mounting:
    // we need an input and a way to do something with the submit.
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="Search Query"
                        value={this.state.query}
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        )
    }
}
