import React from 'react'

export default class GifSearch extends React.Component {

    constructor() {
        super();
        this.state = {
          search: ""
        };
    }
    
    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submit",this.state);
        (this.props.onSubmit)(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Enter a search term</label>
                    <input id="search" name="search" type="text" onChange={this.handleChange} />
                </div>
                <div>
                    <button type="submit">Find Gifs</button>
                </div>
            </form>
        )
    }
}
